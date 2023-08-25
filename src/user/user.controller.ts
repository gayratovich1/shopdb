<<<<<<< HEAD
import { ControllerType } from '../common/types'
import userService from './user.service'

const getAllUsers: ControllerType = async (req, res, next) => {
  try {
    const { verified } = req.query

    const verifiedBool = verified ? JSON.parse(String(verified)) : undefined

    const users = await userService.getAllUser(verifiedBool)

    res.send({
      message: 'All Users',
      users,
    })
  } catch (e) {
    next(e)
  }
}

const getAllAdmins: ControllerType = async (req, res, next) => {
  try {
    const admins = await userService.getAllAdmins()

    res.send({
      message: 'All Admins',
      admins,
    })
  } catch (e) {
    next(e)
  }
}

const toggleAdmin: ControllerType = async (req, res, next) => {
  try {
    const {id} = req.params
    const admins = await userService.toggleAdmin(+id)

    res.send({
      message: 'Toggle Admin',
      admins,
    })
  } catch (e) {
    next(e)
  }
}

const deleteUsers: ControllerType = async (req, res, next) => {
  try {
    const users = await userService.deleteUsers()

    res.send({
      message: 'Deleted Users',
      users,
    })
  } catch (e) {
    next(e)
  }
}

export default {
  getAllUsers,
  getAllAdmins,
  toggleAdmin,
  deleteUsers
}
=======
import { NextFunction, Request, Response } from "express";
import userSevice from "./user.sevice";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {verified} = req.query
        const verifiedBool = verified ? JSON.parse(String(verified)) : undefined 
        const users = await userSevice.getAllUsers(verifiedBool)

        res.send({
            message: 'All Users',
            users
        })

    } catch (e) {
        next(e)
    }
}

export default {
    getAllUsers
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
