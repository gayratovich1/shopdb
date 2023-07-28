import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import authService from './auth.service'
import { User } from '@prisma/client'
import { userDto } from './auth.dto'

const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const { id, userId } = await authService.register(email, password)

    res.send({
      message: 'Register successful',
      verificationId: id,
      timeout: process.env.VERIFICATION_TIMEOUT,
      userId,
    })
  } catch (e) {
    const error = e as Error
    res.status(403).send({
      message: error.message,
    })
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const { password: pass, ...rest } = await authService.login(email, password)
    const accessToken = jwt.sign(rest, process.env.JWT_SECRET ?? 'SECRET')

    res.send({
      message: 'Login Successful',
      user: rest,
      accessToken,
    })
  } catch (e) {
    const error = e as Error
    res.status(401).send({
      message: error.message,
    })
  }
}

const verify = async (req: Request, res: Response) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1]

    if (!accessToken) {
      res.status(401).send({
        message: 'Token not found!',
      })
      return
    }

    const jwtPayload = jwt.verify(
      accessToken,
      process.env.JWT_SECRET ?? 'SECRET'
    ) as Omit<User, 'password'>

    console.log(jwtPayload)

    res.locals = {
      user: {
        id: jwtPayload.id,
        email: jwtPayload.email,
        verified: jwtPayload.verified,
      },
    }

    res.send({
      message: 'Token Verified',
      user: userDto(jwtPayload),
    })
  } catch (e) {
    const error = e as Error
    res.status(401).send({
      message: error.message,
    })
  }
}

const verification = async (req: Request, res: Response) => {
  try {
    const { verificationId, code } = req.body
    const user = await authService.verification(verificationId, code)
    if (!user) {
      throw new Error('User not found')
    }

    const { password, ...rest } = user
    const accessToken = jwt.sign(rest, process.env.JWT_SECRET ?? 'SECRET')

    res.send({
      message: 'Verification Successful',
      user: rest,
      accessToken,
    })
  } catch (e) {
    const error = e as Error
    res.status(401).send({
      message: error.message,
    })
  }
}

const resend = async (req: Request, res: Response) => {
  try {
    const { verificationId, email, userId } = req.body
    const verification = await authService.resend(email, userId, verificationId)

    res.send({
      message: 'Resend Code',
      verificationId: verification.id,
      userId: verification.userId,
      timeout: process.env.VERIFICATION_TIMEOUT,
    })
  } catch (e) {
    const error = e as Error
    res.status(403).send({
      message: error.message,
    })
  }
}

const forgotPasswordEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    await authService.forgotPasswordEmail(email)

    res.send({
      message: `A password reset link has been sent to ${email}`,
    })
  } catch (e) {
    const error = e as Error
    res.status(403).send({
      message: error.message,
    })
  }
}

const forgotPasswordLink = async (req: Request, res: Response) => {
  try {
    const { id, code, time } = req.query
    console.log(id, code, time)
    res.send()
  } catch (e) {}
}

export default {
  register,
  login,
  verify,
  verification,
  resend,
  forgotPasswordEmail,
  forgotPasswordLink,
}
