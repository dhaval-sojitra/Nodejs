const express = require('express');
const router = express.Router();
router.get('/products', (req, res) => {
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

router.get('/product/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": { "id": id, "name": "HP", "price": 45000, "category": "laptop" },
        "message": "retrieve successfully"

    });

});

router.post('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "name": req.body.name, "price": req.body.price, "category": req.body.category },
        "message": "insert successfully"
    });
});

router.put('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id, "name": req.body.name, "price": req.body.price, "category": req.body.category },
        "message": "update successfully"
    });
});

router.delete('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": { "id": req.body.id },
        "message": "deleted successfully"
    });
});

module.exports = router;