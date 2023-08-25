<<<<<<< HEAD
import { ControllerType } from '../common/types'
import cartService from './cart.service'

const addProductToCart: ControllerType = async (req, res, next) => {
  try {
    const { productId } = req.body
    const { id } = res.locals.user

    const cart = await cartService.addProductToCard(+productId, +id)

    res.send({
      message: 'Added Product to Cart',
      cartItem: cart,
    })
  } catch (e) {
    next(e)
  }
}

const removeProductFromCart: ControllerType = async (req, res, next) => {
  try {
    const { productId } = req.body
    const { id } = res.locals.user

    const removedProduct = await cartService.removeProductFromCart(
      +id,
      +productId
    )

    res.send({
      message: 'Removed Product from Cart',
      cartItem: removedProduct,
    })
  } catch (e) {
    next(e)
  }
}

export default {
  addProductToCart,
  removeProductFromCart,
}
=======
import { ControllerType } from "../common/types";
import cartService from "./cart.service";

const addProductToCart: ControllerType = async  (req, res, next) => {
    try {
        const {productId} = req.body
        const {id} = res.locals.user.id

        const cart = await cartService.addProductToCart(+productId, +id)
        
        res.send({
            message: 'Added Product to Cart',
            cartItem: cart
        })
    } catch (e) {
        next(e)
    }
}

const removeProductFromCart: ControllerType = async (req, res, next) => {
    try {
        const {productId} = req.body
        const {id} = res.locals.user.id

        const removed = await cartService.removeProductFromCart(+productId, +id)

        res.send({
            message: 'Remove Product from Cart',
            cartItem: removed
        })
    } catch (e) {
        next(e)
    }
}

const getUserCart: ControllerType = async (req, res, next) => {
    try {
        const {id} = res.locals.user.id

        const userCart = await cartService.getUserCart(+id)

        res.send({
            message: 'All cart',
            cartItem: userCart
        })
    } catch (e) {
        next(e)
    }
}

export default {
    addProductToCart,
    removeProductFromCart,
    getUserCart
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
