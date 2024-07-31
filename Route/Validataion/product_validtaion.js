const Joi = require('joi');

exports.CreatProduct = (req, res, next) => {
    const productScheme = Joi.object({
        "id": Joi.number().required(),
        "name": Joi.string().required(),
        "price": Joi.number().required(),
        "category": Joi.string().required()
    });


    const { error } = productScheme.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}