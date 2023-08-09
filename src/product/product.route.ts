import { Router } from "express";
import upload from "../common/uploadFile.middleware";
import productController from "./product.controller";
import bodyValidate from "../common/body-validate.middleware";
import createProductScheme from './product.model'

const router = Router()

router.post('/', bodyValidate(createProductScheme.createProductScheme), upload.single('img'), productController.createProduct)
router.put('/:id', bodyValidate(createProductScheme.updateProductScheme), upload.single('img'), productController.updateProduct)
router.delete('/:id', upload.single('img'), productController.deleteProduct)

export default router