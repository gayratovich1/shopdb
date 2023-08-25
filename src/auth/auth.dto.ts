<<<<<<< HEAD
import { User } from '@prisma/client'

export const userDto = (payload: any): Omit<User, 'password'> => {
  return {
    id: payload.id,
    name: payload.name,
    surname: payload.surname,
    email: payload.email,
    address: payload.address,
    phone: payload.phone,
    verified: payload.verified,
    role: payload.role,
  }
}
=======
import { User } from "@prisma/client"

export const userDto = (payload: any ): Omit<User, 'password'> => {
    return {
        id: payload.id, 
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        address: payload.address,
        phone: payload.phone,
        verified: payload.verified,
        role: payload.role
    }
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
