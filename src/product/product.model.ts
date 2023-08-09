import Joi from "joi";

const createProductScheme = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    cover: Joi.string().required(),
    categoryId: Joi.number().required()
})

const updateProductScheme = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    cover: Joi.string(),
    categoryId: Joi.number()
})

export default {
    createProductScheme,
    updateProductScheme
}