<<<<<<< HEAD
import { NextFunction, Request, Response } from 'express'
import productService from './product.service'
import createHttpError from 'http-errors'
import { ControllerType } from '../common/types'

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price, description, categoryId } = req.body
    const file = req.file

    if (!file) {
      throw createHttpError(400, 'File not found')
    }

    const product = await productService.createProduct({
      name,
      price: +price,
      description,
      categoryId: +categoryId,
      cover: file.filename,
    })

    res.status(201).send({
      message: 'Product Created',
      product,
    })
  } catch (e) {
    next(e)
  }
}

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const { name, price, categoryId, description } = req.body
    const file = req.file

    const product = await productService.updateProduct(+id, {
      name,
      price: +price || price,
      categoryId: +categoryId || categoryId,
      description,
      cover: file?.filename,
    })

    res.send({
      message: 'Product Updated',
      product,
    })
  } catch (e) {
    next(e)
  }
}

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params

    const deletedProduct = await productService.deleteProduct(+id)
    res.send({
      message: 'Product Deleted',
      product: deletedProduct,
    })
  } catch (e) {
    next(e)
  }
}

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const product = await productService.getProductById(+id)
    res.send({
      message: 'Product Details',
      product,
    })
  } catch (e) {
    next(e)
  }
}

const createImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const file = req.file
    console.log(id)
    if (!file) throw createHttpError(404, 'File not found')

    const image = await productService.createImage(+id, file.filename)

    res.status(201).send({
      message: 'Image created',
      image,
    })
  } catch (e) {
    next(e)
  }
}

const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const image = await productService.deleteImage(+id)

    res.send({
      message: 'Image deleted',
      image,
    })
  } catch (e) {
    next(e)
  }
}

const createDetail: ControllerType = async (req, res, next) => {
  try {
    const { id } = req.params
    const { key, value } = req.body

    const detail = await productService.createDetail(+id, key, value)

    res.status(201).send({
      message: 'Detail Created',
      detail,
    })
  } catch (e) {
    next(e)
  }
}
const updateDetail: ControllerType = async (req, res, next) => {
  try {
    const { id } = req.params
    const { key, value } = req.body

    const detail = await productService.updateDetail(+id, key, value)

    res.send({
      message: 'Detail Updated',
      detail,
    })
  } catch (e) {
    next(e)
  }
}

const deleteDetail: ControllerType = async (req, res, next) => {
  try {
    const { id } = req.params

    const detail = await productService.deleteDetail(+id)
    res.send({
      message: 'Detail Deleted',
      detail,
    })
  } catch (e) {
    next(e)
  }
}

const createReview: ControllerType = async (req, res, next) => {
  try {
    const { comment } = req.body
    const { id } = req.params
    const userId = res.locals.user.id

    const review = await productService.createReview(comment, userId, +id)

    res.status(201).send({
      message: 'Review Created',
      review,
    })
  } catch (e) {
    next(e)
  }
}

export default {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  deleteImage,
  createImage,
  createDetail,
  updateDetail,
  deleteDetail,
  createReview,
}
=======
import { NextFunction, Request, Response } from "express";
import productService from "./product.service";
import createHttpError from "http-errors";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, description, categoryId } = req.body
        const file = req.file
        if (!file) {
            throw createHttpError(400, 'File not found')
        }
        const product = await productService.createProduct({
            name, price: +price, description, categoryId: +categoryId, cover: file.path,
        })

        res.status(201).send({
            message: 'Product Created',
            product
        })
    }
    catch (e) {
        next(e)
    }
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const {name, price, categoryId, description} = req.body
        const file = req.file

        const product = await productService.updateProduct(+id , {name, price: +price || price, categoryId: +categoryId || categoryId, description, cover: file?.filename})

        res.send({
            message: 'Product updated',
            product
        })
    }
    catch(e) {
        next(e)
    }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const {name, price, categoryId, description} = req.body
        const file = req.file

        const deletedProduct = await productService.deleteProduct(+id)

        res.send({
            message: 'Product deleted',
            deletedProduct
        })
    }
    catch(e) {
        next(e)
    }
}

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params

        const product = await productService.getProductById(+id)

        res.send({
            message: 'Product',
            product
        })
    }
    catch(e) {
        next(e)
    }
}

const createImage = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params
        const file = req.file

        if (!file) {
            throw createHttpError(404, 'File not found')
        }

        const image = await productService.createImage(+id, file?.filename)

        res.status(201).send({
            message: 'Image created',
            image
        })
    }
    catch(e){
        next(e)
    }
}

const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params

        const image = await productService.deleteImage(+id)

        res.status(201).send({
            message: 'Image deleted',
            image
        })
    }
    catch(e){
        next(e)
    }
}

const productCreateDetail = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params
        const { key, value } = req.body
        
        const productDetail = await productService.productCreateDetail(
            +id,
            key,
            value,
        )

        res.status(201).send({
            message: 'Detail created',
            productDetail
        })
    }
    catch(e) {
        next(e)
    }
}

const productUpdateDetail = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params
        const { key, value } = req.body
        
        const productDetail = await productService.productUpdateDetail(
            +id,
            key,
            value
        )

        res.send({
            message: 'Detail updated',
            productDetail
        })
    }
    catch(e){
        next(e)
    }
}

const productDeleteDetail = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params

        const productDetail = await productService.productDeleteDetail(+id)

        res.send({
            message: 'Detail deleted',
            productDetail
        })
    }
    catch(e){
        next(e)
    }
}

const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {productId, userId} = req.params
        const {comment} = req.body

        const review = await productService.createReview(
            +productId,
            comment,
            +userId
        )

            res.status(201).send({
                message: 'Comment created',
                review
            })
    }
    catch(e){
        next(e)
    }
}

const updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params
        const {comment} = req.body

        const upReview = await productService.updateReview(
            +id,
            comment
        )

        res.send({
            message: 'Comment updated',
            upReview
        })
    }
    catch(e) {
        next(e)
    }
}

const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params

        const delReview = await productService.deleteReview(
            +id
        )

        res.send({
            message: 'Comment deleted',
            delReview
        })
    }
    catch(e) {
        next(e)
    }
}

const createRating = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user = res.locals.user
        const {id} = req.params
        const {rate} = req.body

        const rating = await productService.createRating(
            user.id, +id, rate
        )

        res.status(201).send({
            message: 'Rating created',
            rating
        })
    }
    catch(e) {
        next(e)
    }
}

const updateRating = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params
        const {rate} = req.body

        const rating = await productService.updateRating(
            +id, rate
        )

        res.send({
            message: 'Rating updated',
            rating
        })
    }
    catch(e){
        next(e)
    }
}

const deleteRating = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params

        const rating = await productService.deleteRating(
            +id
        )

        res.send({
            message: 'Rating deleted',
            rating
        })
    }
    catch(e) {

    }
}

const createSaved = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params
        const {productId} = req.body

        const saved = await productService.createSaved(
            +id, productId
        )

        res.status(201).send({
            message: 'Saved created',
            saved
        })
    }
    catch(e) {
        next(e)
    }
}

const deleteSaved = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params 
        const saved = await productService.deleteSaved(
            +id
        )

        res.send({
            message: 'Saved deleted',
            saved
        })
    }
    catch(e) {
        next(e)
    }
}
  
export default {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    createImage,
    deleteImage,
    productCreateDetail,
    productUpdateDetail,
    productDeleteDetail,
    createReview,
    updateReview,
    deleteReview,
    createRating,
    updateRating,
    deleteRating,
    createSaved,
    deleteSaved
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
