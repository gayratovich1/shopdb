<<<<<<< HEAD
import Joi from 'joi'

const createProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  categoryId: Joi.number().min(1).required()
})

const updateProduct = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
})

const createDetail = Joi.object({
  key: Joi.string().required(),
  value: Joi.string().required(),
})

const updateDetail = Joi.object({
  key: Joi.string(),
  value: Joi.string(),
})

export default {
  createDetail,
  createProduct,
  updateDetail,
  updateProduct,
}
=======
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
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
