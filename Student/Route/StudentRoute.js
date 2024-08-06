const express = require('express');

const router = express.Router();

const studentcontroller = require("./../Controller/StudentController");

router.get('/students', studentcontroller.index);


router.get('/student', studentcontroller.show);

router.post('/student', studentcontroller.store);

router.put('/student', studentcontroller.update);

router.delete('/student', studentcontroller.destroy);

module.exports = router;