<<<<<<< HEAD
import { Router } from 'express'
import authRoute from './auth/auth.route'
import categoryRoute from './category/category.route'
import productRoute from './product/product.route'
import cardRoute from './cart/cart.route'
import { errorHandler } from './common/error-handler'
=======
import { Router } from "express"
import authRouter from "./auth/auth.route"
import categoryRouter from './category/category.route'
import productRoute from './product/product.route'
import cardRoute from './cart/cart.route'
import { errorHandler } from "./common/error-handler"
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
import userRoute from './user/user.route'

const router = Router()

<<<<<<< HEAD
router.use('/auth', authRoute)
router.use('/users', userRoute)
// router.use('/category', categoryRoute)
=======
router.use('/auth', authRouter)
router.use('/users', userRoute)
router.use('/category', categoryRouter)
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
router.use('/product', productRoute)
router.use('/cart', cardRoute)
router.use(errorHandler)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
