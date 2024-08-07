const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const router = require('./Route/StudentRoute');

mongoose.connect('mongodb+srv://dhavalsojitra876:dhavalsojitra876@cluster0.1p5ss.mongodb.net', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api', router)
app.listen(5000, () => {
    console.log("listening at http://localhost:5000");
})