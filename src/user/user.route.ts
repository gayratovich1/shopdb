<<<<<<< HEAD
import { Router } from 'express'
import { userVerify } from '../common/user-verify.middleware'
import userController from './user.controller'

const router = Router()

router.get('/', userVerify(['supervisor']), userController.getAllUsers)
router.get('/admins', userVerify(['supervisor']), userController.getAllAdmins)
router.put('/admins/:id', userVerify(['supervisor']), userController.toggleAdmin)
router.delete('/admins/:id', userVerify(['supervisor']), userController.deleteUsers)

export default router
=======
import { Router } from "express";
import { userVerify } from "../common/user-verify.middleware";
import userController from "./user.controller";

const router = Router()

router.get('/', userVerify(["supervisor"]), userController.getAllUsers)

export default router
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
