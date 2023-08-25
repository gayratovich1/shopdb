<<<<<<< HEAD
import prisma from '../prisma/prisma.service'
import { v4 } from 'uuid'

const createVerification = async ({
  email,
  userId,
}: {
  email: string
  userId: number
}) => {
  const id = v4()
  const code = Math.floor(1000000 * Math.random())
  const date = new Date()
  const verification = await prisma.verification.create({
    data: {
      email,
      id,
      code,
      date,
      userId,
    },
  })

  setTimeout(async () => {
    await deleteVerification(verification.id)
  }, parseInt(process.env.VERIFICATION_TIMEOUT ?? '300000'))

  return verification
}

async function deleteVerification(id: string) {
  const verification = await prisma.verification.delete({
    where: {
      id,
    },
  })
  return verification
}

const findVerification = async (id: string) => {
  const verification = await prisma.verification.findUnique({
    where: {
      id,
    },
  })
  return verification
}

export default {
  findVerification,
  deleteVerification,
  createVerification,
}
=======
import prisma from "../prisma/prisma.service"
import { v4 } from "uuid"

const createVerification = async ({ email, userId }: { email: string, userId: number }) => {
    const id = v4()
    const code = Math.floor(1000000 * Math.random())
    const date = new Date()

    const verification = await prisma.verification.create({
        data: {
            email,
            id,
            code,
            date,
            userId
        }
    })

    setTimeout(() => {deleteVerification(verification.id)}, parseInt(process.env.VERIFICATION_TIMEOUT ?? "300000"))

    return verification
}

async function deleteVerification(id: string) {
    const verification = await prisma.verification.delete({
        where: {
            id
        }
    })
    return verification
}

const findVerification = async (id: string) => {
    const verification = await prisma.verification.findUnique({
        where: {
            id
        }
    })
    return verification
}

export default {
    createVerification,
    deleteVerification,
    findVerification
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
