import { verify } from 'crypto'
import prisma from '../prisma/prisma.service'
import bcrypt from 'bcrypt'
import verifyService from './verify.service'
import { sendMail } from '../common/mailer.service'
import forgotPasswordService from './forgot-password.service'
import createError from 'http-errors'

const register = async (email: string, password: string) => {
  const findedUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (findedUser) {
    throw createError(400, 'Email already exists')
  }
<<<<<<< HEAD

=======
  
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  const hashPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
    },
  })
<<<<<<< HEAD

  const verification = await verifyService.createVerification({
    email,
    userId: user.id,
=======
  
  const verification = await verifyService.createVerification({
    email,
    userId: user.id
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  })

  sendMail(email, verification.code)

  return verification
}

const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw createError(404, 'User not found')
  }

  const compare = await bcrypt.compare(password, user.password)

  if (!compare) {
    throw createError(400, 'Wrong Password')
  }

  return user
}

const verification = async (verificationId: string, code: string) => {
  const verification = await verifyService.findVerification(verificationId)
<<<<<<< HEAD
  if (!verification) {
=======
  if(!verification) {
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
    throw createError(404, 'Verification not found')
  }

  const codeIsValid = +code === verification.code

<<<<<<< HEAD
  if (codeIsValid) {
=======
  if(codeIsValid) {
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
    const user = await prisma.user.update({
      where: {
        id: verification.userId,
      },
      data: {
<<<<<<< HEAD
        verified: true,
        role: 'user',
      },
    })
    return user
=======
        verified: true
      }
    })
    return await prisma.user.findUnique({
      where: {
        id: verification.userId
      }
    })
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  } else {
    throw createError(400, 'Code not valid')
  }
}

<<<<<<< HEAD
const resend = async (
  email: string,
  userId: number,
  verificationId: string
) => {
  const verification = await verifyService.findVerification(verificationId)

  if (verification) {
    throw createError(400, 'Verification not expiried')
=======
const resend = async (email: string, userId: number, verificationId: string) => {
  const verification = await verifyService.findVerification(verificationId)

  if(verification) {
    throw createError(400, 'Verification not expired')
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  }

  const newVerification = await verifyService.createVerification({
    email,
<<<<<<< HEAD
    userId,
=======
    userId
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  })

  sendMail(email, newVerification.code)

  return newVerification
}

const forgotPasswordEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
      AND: {
<<<<<<< HEAD
        verified: true,
      },
    },
  })

  if (!user) {
=======
        verified: true
      }
    }
  })

  if(!user) {
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
    throw createError(404, 'User not found')
  }

  const forgotPassword = await forgotPasswordService.createForgotPassword(email)
<<<<<<< HEAD

  const link = `http://localhost:3000/api/v1/auth/forgot-password/?id=${
    forgotPassword.id
  }&code=${forgotPassword.code}&time=${new Date(forgotPassword.date).getTime()}`

  sendMail(email, link)

  return forgotPassword
}

const forgotPasswordLink = async (
  id: string,
  code: number,
  password: string
) => {
=======
  const link = `http://localhost:3000/api/v1/auth/forgot-password/?id=${forgotPassword.id}&code=${forgotPassword.code}&=time=${new Date(forgotPassword.date).getTime()}`

  sendMail(email, link)
  return forgotPassword
}

const forgotPasswordLink = async (id: string, code: number, password: string) => {
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
  const forgotPassword = await forgotPasswordService.findForgotPassword(id)

  if (!forgotPassword) {
    throw createError(404, 'Forgot password expired')
  }

  const codeIsValid = code === forgotPassword.code

<<<<<<< HEAD
  if (codeIsValid) {
    const user = await prisma.user.update({
      where: {
        email: forgotPassword.email,
      },
      data: {
        password,
      },
=======
  if(codeIsValid) {
    const user = await prisma.user.update({
      where: {
        email: forgotPassword.email
      },
      data: {
        password
      }
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
    })

    return user
  }

  throw createError(400, 'Code not valid')
}

export default {
  register,
  login,
  verification,
  resend,
  forgotPasswordEmail,
<<<<<<< HEAD
  forgotPasswordLink,
=======
  forgotPasswordLink
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
}
