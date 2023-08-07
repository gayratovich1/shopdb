import { Router } from "express";
import categoryController from "./category.controller";
import { userVerify } from "../common/user-verify.middleware";
import bodyValidate from "../common/body-validate.middleware";
import cCS from '../category/category.model'
import { error } from "console";
import { errorHandler } from "../common/error-handler";

const router = Router()

router.post('/', userVerify(['admin'],), bodyValidate(cCS.createCategoryScheme), categoryController.createCategory)
router.get('/', userVerify(['user', 'admin']), categoryController.getAllCategory)
router.get('/:id', userVerify(['admin']), categoryController.getCategoryById)
router.put('/:id', userVerify(['admin']), bodyValidate(cCS.createCategoryScheme), categoryController.updateCategory)
router.delete('/:id', userVerify(['admin']), categoryController.deletedCategory)
router.use(errorHandler)

export default router