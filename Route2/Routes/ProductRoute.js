const express = require('express')
const router = express.Router()
const productcontroller = require('./../Controller/ProductController')

router.get('/products',productcontroller.index)

module.exports = router

