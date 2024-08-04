const express = require('express')

const app = express()

app.use(express.json())

const router = require('./Routes/productroute')

app.use('/api',router)

app.listen(2000, () => {
    console.log("listening at http://localhost:2000")
})