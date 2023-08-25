import Joi from 'joi'

const registerScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

const verificationScheme = Joi.object({
  verificationId: Joi.string().required(),
  code: Joi.string().required()
})

const resendScheme = Joi.object({
  verificationId: Joi.string().required(),
  email: Joi.string().email().required(),
  userId: Joi.number().required() 
})

const forgotPasswordEmailScheme = Joi.object({
  email: Joi.string().email().required()
})

export default {
  registerScheme,
  verificationScheme,
  resendScheme,
  forgotPasswordEmailScheme
}
