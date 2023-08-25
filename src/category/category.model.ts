<<<<<<< HEAD
import Joi from 'joi'

const createCategoryScheme = Joi.object({
  name: Joi.string().required(),
})


export default {
  createCategoryScheme,
}
=======
import Joi from "joi";

const createCategoryScheme = Joi.object({
    name: Joi.string().required()
})

export default {
    createCategoryScheme
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
