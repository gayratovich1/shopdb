<<<<<<< HEAD
import { v4 } from 'uuid'
import prisma from '../prisma/prisma.service'

const createForgotPassword = async (email: string) => {
  const forgotPassword = await prisma.forgotPassword.findUnique({
    where: {
      email,
    },
  })

  if (forgotPassword) {
    throw new Error('Forgot Password already created')
  }

  const id = v4()
  const code = Math.floor(1_000_000 * Math.random())

  const newForgotPassword = await prisma.forgotPassword.create({
    data: {
      code,
      id,
      email,
    },
  })

  setTimeout(() => {
    deleteForgotPassword(newForgotPassword.id)
  }, parseInt(process.env.VERIFICATION_TIMEOUT ?? '300000'))

  return newForgotPassword
}

async function deleteForgotPassword(id: string) {
  const forgotPassword = await prisma.forgotPassword.delete({
    where: { id },
  })
  return forgotPassword
}

const findForgotPassword = async (id: string) => {
  const forgotPassword = await prisma.forgotPassword.findUnique({
    where: {
      id,
    },
  })
  return forgotPassword
}

export default {
  findForgotPassword,
  createForgotPassword,
  deleteForgotPassword,
}
=======
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
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
