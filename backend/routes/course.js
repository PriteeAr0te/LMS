const express = require('express');
const router = express.Router();
const fetchadmin = require('../middleware/fetchadmin')
const Course = require('../models/Course');
const { body, validationResult } = require('express-validator');

//Route 1: Get all courses using Get "/api/course/fetchallcourses" Login Required
router.get('/fetchallcourses', fetchadmin, async(req, res)=>{
  try{
    const course = await Course.find({admin: req.admin.id});
    res.json(course)
  }
  catch(error){
    res.status(500).json({error: "Error Occured in fetching Courses"})

  }
})


//Route 1: Add Coourses using Post "/api/course/addcourse" Login Required
router.get('/addcourse', fetchadmin, [
    body('title','Enter a valid title').isLength({min:3}),
   body('description', 'Enter a valid description').isLength({min:3}),

], async(req, res)=>{
    const {title, description, duration, instructor, tag} = req.body;
    try{
        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const course = new Course({
        title, description, duration, instructor, tag, admin: req.admin.id
      })
      const savedCourse = await course.save()
      res.json(savedCourse)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: "Error Occured in adding Course"})
    }
 })
 

module.exports = router;