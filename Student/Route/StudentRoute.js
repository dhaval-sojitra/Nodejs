const express = require('express');
const token = require('./../token');
const router = express.Router();
const studentcontroller = require("./../Controller/StudentController");

router.get('/students', studentcontroller.index);

// router.get('/students', token, studentcontroller.index);

router.get('/student/:_id', studentcontroller.show);

router.post('/student', studentcontroller.store);

router.put('/student/:id', studentcontroller.update);

router.delete('/student/:id', studentcontroller.destroy);

module.exports = router;