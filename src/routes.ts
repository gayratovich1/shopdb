import { Router } from "express"
import authRouter from "./auth/auth.route"
import categoryRouter from './category/category.route'
import productRoute from './product/product.route'
import cardRoute from './cart/cart.route'
import { errorHandler } from "./common/error-handler"
import userRoute from './user/user.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', userRoute)
router.use('/category', categoryRouter)
router.use('/product', productRoute)
router.use('/cart', cardRoute)
router.use(errorHandler)

export default router