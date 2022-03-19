
import { Request, Response, NextFunction} from 'express'
import { IHttpError } from '../error/http.error'


export const errorMiddleware = (error: IHttpError, request: Request, response: Response, next: NextFunction) => { 
    return response.status(error.status).json({ message: error.message })
}