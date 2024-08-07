const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    enrollment: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    bloodgroup: {
        type: String,
    },
    batch: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;