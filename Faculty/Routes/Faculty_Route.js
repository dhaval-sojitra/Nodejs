const express = require('express');
const router = express.Router();
const controller = require('./../Controller/Faculty_Controller');

router.get('/faculty', controller.index)
router.get('/faculty/:id', controller.show)
router.post('/faculty', controller.store)
router.put('/faculty/:id', controller.update)
router.delete('/faculty/:id', controller.delete)

module.exports = router;