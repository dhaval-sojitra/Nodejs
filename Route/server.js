const express = require('express');
const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "id": "1", "name": "HP", "price": 5000, "category": "laptop" },
            { "id": "2", "name": "HP", "price": 5000, "category": "laptop" },
            { "id": "3", "name": "HP", "price": 5000, "category": "laptop" },
            { "id": "4", "name": "HP", "price": 5000, "category": "laptop" },
            { "id": "5", "name": "HP", "price": 5000, "category": "laptop" }
        ],
        "message": "retrieve successfully"
    });
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": { "id": id, "name": "HP", "price": 45000, "category": "laptop" },
        "message": "retrieve successfully"
    });
});

app.post('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "name": req.body.name, "price": req.body.price, "category": req.body.category },
        "message": "insert successfully"
    });
});

app.put('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id, "name": req.body.name, "price": req.body.price, "category": req.body.category },
        "message": "update successfully"
    });
});

app.delete('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id },
        "message": "deleted successfully"
    });
});

app.listen(5000, () => { console.log('Running in 5000'); });