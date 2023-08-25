import { Router, Request, Response, NextFunction } from 'express'
import authController from './auth.controller'
import bodyValidate from '../common/body-validate.middleware'
import registerScheme from './auth.model'
import createHttpError from 'http-errors'
import { errorHandler } from '../common/error-handler'

const router = Router()

<<<<<<< HEAD
router.post('/register', bodyValidate(registerScheme), authController.register)
router.post('/login', bodyValidate(registerScheme), authController.login)
router.get('/verify', authController.verify)
router.post('/verification', authController.verification)
router.post('/resend', authController.resend)
router.post('/forgot-password-email', authController.forgotPasswordEmail)
router.post('/forgot-password', authController.forgotPasswordLink)
=======
router.post('/register', bodyValidate(registerScheme.registerScheme), authController.register)
router.post('/login', bodyValidate(registerScheme.registerScheme), authController.login)
router.get('/verify', authController.verify)
router.post('/verification', bodyValidate(registerScheme.verificationScheme), authController.verification)
router.post('/resend', bodyValidate(registerScheme.resendScheme), authController.resend)
router.post('/forgot-password-email', bodyValidate(registerScheme.forgotPasswordEmailScheme), authController.forgotPasswordEmail)
router.get('/forgot-password', authController.forgotPasswordLink)
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793

export default router
