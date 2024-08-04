exports.index = (req,res) => {
    res.json({
        "status" : "active",
        "data" : [
            {"id":1,"name" : "HP 001","price" : 50000,"category":"laptop"},
            {"id":2,"name" : "HP 002","price" : 55000,"category":"laptop"},
            {"id":3,"name" : "HP 003","price" : 60000,"category":"laptop"},
            {"id":4,"name" : "HP 004","price" : 65000,"category":"laptop"},
            {"id":5,"name" : "HP 005","price" : 70000,"category":"laptop"},
        ]
    })
}