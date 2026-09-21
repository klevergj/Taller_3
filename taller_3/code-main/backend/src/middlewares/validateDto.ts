import type { Request, Response, NextFunction } from 'express';
import { ZodError, type ZodSchema } from 'zod';
import { ApiResponse, type FieldError } from '../utils/api-response.js';

export const validateDto = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const details: FieldError[] = error.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));
        ApiResponse.error(res, 'Error de validación en la petición', 400, details);
        return;
      }
      next(error);
    }
  };
};
