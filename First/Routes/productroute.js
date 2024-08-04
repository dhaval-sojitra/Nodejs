const express = require('express')

const router = express.Router()

const productcontroller = require('./../Controller/ProductController')

router.get('/product',productcontroller.index)

router.get('/product/:id',productcontroller.show)

router.post('/product',productcontroller.store)

router.put('/product',productcontroller.update)

router.delete('/product',productcontroller.delete)

module.exports = router;