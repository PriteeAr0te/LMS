const mongoose = require('mongoose');
const {Schema} = mongoose;

const AdminSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

AdminSchema.index({ email: 1 }, { unique: true });
const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;