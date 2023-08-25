<<<<<<< HEAD
import { Router } from 'express'
import { userVerify } from '../common/user-verify.middleware'
import cartController from './cart.controller'
=======
import { Router } from "express";
import { userVerify } from "../common/user-verify.middleware";
import cartController from "./cart.controller";
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793

const router = Router()

router.post('/', userVerify(['user']), cartController.addProductToCart)
<<<<<<< HEAD
router.delete('/', userVerify(['user']), cartController.removeProductFromCart)

export default router
=======
router.delete('/', userVerify(['user']), cartController.removeProductFromCart) 

export default router
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
