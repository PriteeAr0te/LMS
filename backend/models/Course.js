const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true
    },
    duration: {
        type: String,
    },
    tags: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('course', CourseSchema)