import { NextFunction, Request, Response } from "express"
import createHttpError from "http-errors"

export const errorHandler = (
    err: Error | createHttpError.HttpError, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if(err instanceof createHttpError.HttpError) {
        res.status(err.statusCode ?? 500).send({
            message: err.message
        })
    } else {
        res.status(500).send({
            message: 'Something went wrong'
        })
    }
}