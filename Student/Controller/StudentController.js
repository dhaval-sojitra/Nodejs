const mongoose = require('mongoose');
const Student = require('../Model/StudentModel');
// exports.index = (req, res) => {
//     res.json({
//         "status": "success",
//         "data": [
//             { "id": 1, "name": "Dhaval", "program": "MCA", "enrno": 230823101, "dob": "12/10/2002", "bloodgroup": "O+", "mobile": 6351393788, "email": "dhaval@gmail.com", "address": "Surat" },
//             { "id": 2, "name": "Keval", "program": "BCA", "enrno": 230823102, "dob": "22/08/2002", "bloodgroup": "A+", "mobile": 6351393789, "email": "keval@gmail.com", "address": "Surat" },
//             { "id": 3, "name": "Jimit", "program": "MCA", "enrno": 230823103, "dob": "30/05/2002", "bloodgroup": "B+", "mobile": 6351393790, "email": "jimit@gmail.com", "address": "Surat" },
//             { "id": 4, "name": "Divyaraj", "program": "MscIt", "enrno": 230823104, "dob": "01/09/2001", "bloodgroup": "O+", "mobile": 6351393791, "email": "divyaraj@gmail.com", "address": "Surat" },
//             { "id": 5, "name": "Jaydeep", "program": "BBA", "enrno": 230823105, "dob": "02/02/2002", "bloodgroup": "O-", "mobile": 6351393792, "email": "jaydeep@gmail.com", "address": "Surat" }

//         ],
//         "message": "Retrive data"
//     });
// }

exports.index = async(req, res) => {
    const data = await Student.find({});
    res.json(data);
}

exports.show = async(req, res) => {
    try {
        const { _id } = req.params;

        // Validate the ID
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        // Find the student by ID
        const student = await Student.findById(_id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Respond with the student data
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.store = async(req, res) => {
    try {
        console.log(req.body);
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = (req, res) => {
    let id = req.params.id
    res.json({
        "status": "success",
        "data": [
            { "id": id, "name": "Dhaval", "program": "MCA", "enrno": 230823101, "dob": "12/10/2002", "bloodgroup": "O+", "mobile": 6351393788, "email": "dhaval@gmail.com", "address": "Surat" },
        ],
        "message": "Update data"
    });
}

exports.destroy = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "data": [
            { "id": id },
        ],
        "message": "Delete data"
    });
}