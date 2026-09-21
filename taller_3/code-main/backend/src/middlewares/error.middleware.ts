import type { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/api-response.js';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Unhandled Error:', err);
  const message = err.message || 'Error interno del servidor';
  const statusCode = err.statusCode || err.status || 500;
  ApiResponse.error(res, message, statusCode);
};
