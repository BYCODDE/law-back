import { Request, Response, NextFunction } from 'express'
import { ZodError, ZodSchema } from 'zod'

export const validate = (schema: ZodSchema, req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues)
    }
  }
}
