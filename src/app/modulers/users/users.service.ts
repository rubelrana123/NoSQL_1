// import { NextFunction, Request, Response } from "express";
import { User } from './users.model'
import { IUser } from './users.interface'
 
import { generateUserId } from './users.utils'
import config from '../../../config'
 
const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id
  console.log(config.default_user_pass, user , "user pass")
  console.log(config.database_url , "user db")
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}