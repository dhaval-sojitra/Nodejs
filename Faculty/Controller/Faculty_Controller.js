const mongoose = require('mongoose');
const Faculty = require('../Models/Faculty_model');

exports.index = async(req, res) => {
    try {
        const data = await Faculty.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
    }
}

exports.show = async(req, res) => {
    try {
        const data = await Faculty.find({ "_id": req.params.id });
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
    }
}
exports.store = async(req, res) => {
    try {
        const data = await Faculty.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
    }
}

exports.update = async(req, res) => {
    try {
        const data = await Faculty.findByIdAndUpdate(req.body.id, req.body, { new: true })
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
    }
}

exports.delete = async(req, res) => {
    try {
        const data = await Faculty.findByIdAndDelete({ "_id": req.body.id })
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
    }
}