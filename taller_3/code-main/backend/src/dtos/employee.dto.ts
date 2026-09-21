import { z } from 'zod';

export const createEmployeeSchema = z.object({
  nombre: z
    .string({ message: 'El nombre debe ser una cadena de texto' })
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),

  cargo: z
    .string({ message: 'El cargo es requerido' })
    .min(1, { message: 'El cargo es requerido' }),

  departamento: z
    .string({ message: 'El departamento es requerido' })
    .min(1, { message: 'El departamento es requerido' }),

  sueldo: z
    .number({ message: 'El sueldo debe ser un número' })
    .positive({ message: 'El sueldo debe ser un número positivo' }),
});

export const updateEmployeeSchema = createEmployeeSchema.partial();

export type CreateEmployeeDto = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeDto = z.infer<typeof updateEmployeeSchema>;
