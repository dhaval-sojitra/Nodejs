exports.index = (req, res) => {
    res.json(
        {
            "status": "active"            ,
            "data": [
                {"id":1,"name":"HP 1","price":50000,"category":"electronics"},
                {"id":2,"name":"HP 2","price":5000,"category":"electronics"},
                {"id":3,"name":"HP 3","price":5000,"category":"electronics"},
                {"id":4,"name":"HP 4","price":5000,"category":"electronics"},
                {"id":5,"name":"HP 5","price":5000,"category":"electronics"}
            ],
        })
}

exports.show = (req,res)=>{
    res.json(
        {
            "status": "active"            ,
            "data": 
                {"id":1,"name":"HP 1","price":50000,"category":"electronics"}
        })
}

exports.store = (req,res)=>{
    res.json({
            "status": "active",
            "data":{"name":req.body.name,"price":req.body.price,"category":req.body.category},
            "message":"Inserted Successfully"
        })
}

exports.update = (req,res)=>{
    res.json({
            "status": "active",
            "data":{"id":req.body.id,"name":req.body.name,"price":req.body.price,"category":req.body.category},
            "message":"Updated Successfully"
        })
}

exports.delete = (req,res)=>{
    res.json({
            "status": "active",
            "data":{"id":req.body.id},
            "message":"Deleted Successfully"
        })
}