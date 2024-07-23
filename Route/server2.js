const express = require('express');
const app = express();
app.use(express.json());
app.get('/products', (req, res) => {
    res.json({
        "status": "success",
        "data": [{
                "id": 1,
                "name": "Lenovo Lap",
                "price": 35000,
                "category": "laptop"
            },
            {
                "id": 2,
                "name": "Lenovo Lap",
                "price": 35000,
                "category": "laptop"
            },
            {
                "id": 3,
                "name": "Lenovo Lap",
                "price": 35000,
                "category": "laptop"
            }
        ]
    })
})

// app.listen(3000, () => { console.log('listening on port 3000`);})
app.listen(3000, () => { console.log('Running in 3000'); })