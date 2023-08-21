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