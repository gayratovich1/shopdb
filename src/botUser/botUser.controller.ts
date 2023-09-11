import { ControllerType } from '../common/types'
import botUserService from './botUser.service'

const createBotUser: ControllerType = async (req, res, next) => {
  try {
    const { userId, telegramId } = req.body
    
    const botUser = await botUserService.createBotUser(userId, telegramId)

    res.status(201).send({
      message: 'Bot User Created',
      botUser,
    })
  } catch (e) {
    next(e)
  }
}

const deleteBotUser: ControllerType = async (req, res, next) => {
  try {
    const {userId} = res.locals.user.id

    const deleteUser = await botUserService.deleteBotUser(+userId)

    res.send({
      message: 'Bot User deleted',
      deleteUser
    })
  } catch (e) {
    next(e)
  }
}

export default {
  createBotUser,
  deleteBotUser
}
