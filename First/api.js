const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(request,response)=>{
    response.send("Hello! It's Dhaval")
})

// app.get('/login/:username/:password',(request,response)=>{
//     let username = request.params.username
//     let password = request.params.password
//     response.send("Parameterized Route,Username :"+username+",Password :"+password)
// })

app.get('/login',(request,response)=>{
    let username = request.query.username
    let password = request.query.password
    response.send("Query String Route,Username :"+username+",Password :"+password)
})

app.post('/login',(request,response)=>{
    let username = request.body.username
    let password = request.body.password
    if(username=="dhaval"){

        response.send(  {
            "usertype" : "admin",
            "username" : username,
            "password" : password   
        })
    }
    else{
        response.send("Invalid Credentials")
    }
})

app.listen(2000,()=>{
    console.log("listening at http://localhost:2000")
})