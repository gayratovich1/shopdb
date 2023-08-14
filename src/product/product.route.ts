import { Router } from "express";
import upload from "../common/uploadFile.middleware";
import productController from "./product.controller";
import bodyValidate from "../common/body-validate.middleware";
import createProductScheme from './product.model'
import { userVerify } from "../common/user-verify.middleware";

const router = Router()

router.post('/', userVerify(['admin']), upload.single('img'),  bodyValidate(createProductScheme.createProductScheme), productController.createProduct)
router.put('/:id', userVerify(['admin']), upload.single('img'),  bodyValidate(createProductScheme.updateProductScheme), productController.updateProduct)
router.delete('/:id', userVerify(['admin']), upload.single('img'), productController.deleteProduct)
router.get('/:id', productController.getProductById)
router.post('/:id/image', userVerify(['admin']), upload.single('img'), productController.createImage)
router.delete('/image/:id', userVerify(['admin']), productController.deleteImage)
router.post('/:id/detail', userVerify(['admin']), bodyValidate(createProductScheme.createDetailScheme), productController.productCreateDetail)
router.put('/detail/:id', userVerify(['admin']), bodyValidate(createProductScheme.updateDetailScheme), productController.productUpdateDetail)
router.delete('/detail/:id', userVerify(['admin']), productController.productDeleteDetail)
router.post('/:id/review', userVerify(["admin"]),bodyValidate(createProductScheme.reviewScheme), productController.createReview)
router.put('/review/:id', userVerify(["admin"]), bodyValidate(createProductScheme.updateReviewScheme), productController.updateReview)
router.delete('/review/:id', userVerify(["admin"]), productController.deleteReview)
router.post('/:id/rating', userVerify(["admin"]), bodyValidate(createProductScheme.rateScheme), productController.createRating)
router.put('/rating/:id', userVerify(["admin"]), bodyValidate(createProductScheme.updateReviewScheme), productController.updateRating)
router.delete('/rating/:id', userVerify(["admin"]), productController.deleteRating)

export default router