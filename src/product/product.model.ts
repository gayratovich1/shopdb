import Joi from "joi";

const createProductScheme = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required()
})

const updateProductScheme = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    description: Joi.string()
})

const createDetailScheme = Joi.object({
    key: Joi.string().required(),
    value: Joi.string().required()
})
const updateDetailScheme = Joi.object({
    key: Joi.string(),
    value: Joi.string()
})

const reviewScheme = Joi.object({
    comment: Joi.string().required() 
})

const updateReviewScheme = Joi.object({
    comment: Joi.string()
})

const rateScheme = Joi.object({
    rate: Joi.number().required()
})

const updateRateScheme = Joi.object({
    rate: Joi.number()
})

export default {
    createProductScheme,
    updateProductScheme,
    createDetailScheme,
    updateDetailScheme,
    reviewScheme,
    updateReviewScheme,
    rateScheme,
    updateRateScheme
}