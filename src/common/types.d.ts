<<<<<<< HEAD
import type { NextFunction, Request, Response } from 'express'

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>
=======
import type { NextFunction, Request, Response } from "express"

export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
