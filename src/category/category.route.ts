<<<<<<< HEAD
import { Router } from 'express'
import categoryController from './category.controller'
import { userVerify } from '../common/user-verify.middleware'
import { errorHandler } from '../common/error-handler'
import bodyValidate from '../common/body-validate.middleware'
import categoryModel from './category.model'

const router = Router()

router.post(
  '/',
  userVerify(['admin']),
  bodyValidate(categoryModel.createCategoryScheme),
  categoryController.createCategory
)
router.get(
  '/',
  userVerify(['user', 'admin']),
  categoryController.getAllCategory
)
router.get('/:id', userVerify(['admin']), categoryController.getCategoryById)
router.get('/:id/products', categoryController.getProductsByCategory)
router.put(
  '/:id',
  userVerify(['admin']),
  bodyValidate(categoryModel.createCategoryScheme),
  categoryController.updateCategory
)
router.delete('/:id', userVerify(['admin']), categoryController.deleteCategory)

router.use(errorHandler)

export default router
=======
import { Router } from "express";
import categoryController from "./category.controller";
import { userVerify } from "../common/user-verify.middleware";
import bodyValidate from "../common/body-validate.middleware";
import cCS from '../category/category.model'
import { errorHandler } from "../common/error-handler";

const router = Router()

router.post('/', userVerify(['admin'],), bodyValidate(cCS.createCategoryScheme), categoryController.createCategory)
router.get('/', userVerify(['user', 'admin']), categoryController.getAllCategory)
router.get('/:id', userVerify(['admin']), categoryController.getCategoryById)
router.get('/:id/products', categoryController.getProductsByCategory)
router.put('/:id', userVerify(['admin']), bodyValidate(cCS.createCategoryScheme), categoryController.updateCategory)
router.delete('/:id', userVerify(['admin']), categoryController.deletedCategory)
router.use(errorHandler)

export default router
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
