import { v4 } from "uuid"
import { PrismaClient } from "@prisma/client"
import prisma from "../prisma/prisma.service"

const createForgotPassword = async (email: string) => {
    const forgotPassword = await prisma.forgotPassword.findUnique({
        where: {
            email
        }
    })

    if (forgotPassword) {
        throw new Error('Forgot password already created')
    }

    const id = v4()
    const code = Math.floor(1000000 * Math.random())

    const newForgotPassword = await prisma.forgotPassword.create({
        data: {
            code,
            id,
            email
        }
    })
    setTimeout(() => { deleteForgotPassword(id) }, parseInt(process.env.VERIFICATION_TIMEOUT ?? '300000'))
    return newForgotPassword
}

async function deleteForgotPassword(id: string) {
    const forgotPassword = await prisma.forgotPassword.delete({
        where: {
            id
        }
    })
    return forgotPassword
}

const findForgotPassword = async (id: string) => {
    const forgotPassword = await prisma.forgotPassword.findUnique({
        where: {
            id
        }
    })
    return forgotPassword
}

export default {
    createForgotPassword,
    deleteForgotPassword,
    findForgotPassword
}