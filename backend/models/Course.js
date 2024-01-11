const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    instructor: {
        type: String
    },
    duration: {
        type: String
    },
    tag: {
        type: String
    }
});

module.exports = mongoose.model('course', CourseSchema)