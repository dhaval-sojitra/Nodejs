const express = require('express')
const app = express()
app.use(express.json())

const router = require('./Routes/ProductRoute')

app.use('/api',router)

app.listen(5000,()=>{
    console.log("server running on http://localhost:5000")
})