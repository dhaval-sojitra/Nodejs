const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./Routes/Faculty_Route')

app.use(cors());
app.use(express.json());
app.use('/api', router)
mongoose.connect('mongodb+srv://dhavalsojitra876:dhavalsojitra876@cluster0.ib6zn.mongodb.net/Student')

app.listen(3000, () => {
    console.log("listening on port 3000");
})