const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    experiance: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});

const faculty = mongoose.model('Faculty', facultySchema);
module.exports = faculty;