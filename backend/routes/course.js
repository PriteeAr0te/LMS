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


//Route 2: Add Coourses using Post "/api/course/addcourse" Login Required
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
        // console.log(error)
        res.status(500).json({error: "Error Occured in adding Course"})
    }
 })
 


// Route 3: Update Coourse using Put "/api/course/updatecourse" Login Required
router.put('/updatecourse/:id', fetchadmin, [
    body('title','Enter a valid title').isLength({min:3})
], async(req, res)=>{
    const {title, description, duration, instructor, tag} = req.body;
    try{
        //Create NewCourse Object
        const newCourse = {}
        if(title){newCourse.title= title}
        if(description){newCourse.description= description}
        if(duration){newCourse.duration= duration}
        if(instructor){newCourse.instructor= instructor}
        if(tag){newCourse.tag= tag}

        //Find a NewCourse to uodate and update
        let course = await Course.findById(req.params.id);
        if(!course){
            return res.status(404).json({error: "Not Found"});
        }

        if(course.admin.toString() !== req.admin.id){
            return res.status(401).json({error: "Not Allowed To Update"})
        }

        course = await Course.findByIdAndUpdate(req.params.id, {$set: newCourse}, {new:true})
        res.json({course});
    }
    catch(error){
        // console.log(error)
        res.status(500).json({error: "Error Occured in Updating Course"})
    }

})


// Route 4: Delete Coourse using Delete "/api/course/deletecourse" Login Required
router.delete('/deletecourse/:id', fetchadmin, async(req, res)=>{
    const {title, description, duration, instructor, tag} = req.body;
    try{
        //Find a NewCourse to uodate and update
        let course = await Course.findById(req.params.id);
        if(!course){
            return res.status(404).json({error: "Not Found"});
        }
        // Check if Admin ows this Course
        if(course.admin.toString() !== req.admin.id){
            return res.status(401).json({error: "Not Allowed To Delete"})
        }

        course = await Course.findByIdAndDelete(req.params.id)
        res.json({"Success": "Course has been deleted Successfully"});
    }
    catch(error){
        // console.log(error)
        res.status(500).json({error: "Error Occured in Updating Course"})
    }

})

module.exports = router;