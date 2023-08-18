import { Router, Request, Response, NextFunction } from 'express'
import authController from './auth.controller'
import bodyValidate from '../common/body-validate.middleware'
import registerScheme from './auth.model'
import createHttpError from 'http-errors'
import { errorHandler } from '../common/error-handler'

const router = Router()

router.post('/register', bodyValidate(registerScheme.registerScheme), authController.register)
router.post('/login', bodyValidate(registerScheme.registerScheme), authController.login)
router.get('/verify', authController.verify)
router.post('/verification', bodyValidate(registerScheme.verificationScheme), authController.verification)
router.post('/resend', bodyValidate(registerScheme.resendScheme), authController.resend)
router.post('/forgot-password-email', bodyValidate(registerScheme.forgotPasswordEmailScheme), authController.forgotPasswordEmail)
router.get('/forgot-password', authController.forgotPasswordLink)

export default router
