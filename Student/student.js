const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const router = require('./Route/StudentRoute');

mongoose.connect('mongodb+srv://dhavalsojitra876:dhavalsojitra876@cluster0.ib6zn.mongodb.net/Student', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

app.use('/api', router)
app.listen(5000, () => {
    console.log("listening at http://localhost:5000");
})

// server.js
//     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//     const express = require('express')
// const app = express()
// const port = 5000
// const tokenMiddleware = require('./authMiddleware')

// // app.use(tokenMiddleware)
// //public access
// app.get('/', (req, res) => {
//     res.send("Welcome to nodejs in public")
// })

// //private access
// app.get('/index', tokenMiddleware, (req, res) => {
//     res.send("Welcome to nodejs with middleware private")
// })


// app.listen(port, () => {
//     console.log("welcome to nodejs server localhost:" + port)
// })


// tokenMiddleware.js
//     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//     const staticToken = "atmiyauniversity"

// function tokenMiddleware(req, res, next) {
//     // Extract the token from headers
//     const token = req.headers['authorization'];

//     // Check if the token matches the static token
//     if (token && token === staticToken) {
//         // Token is valid, proceed to the next middleware or route handler
//         next();
//     } else {
//         // Token is invalid, respond with a 401 Unauthorized status
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// }

// module.exports = tokenMiddleware;