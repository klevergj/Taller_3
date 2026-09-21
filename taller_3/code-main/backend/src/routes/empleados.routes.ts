import { Router } from 'express';
import { MongoEmployeeRepository } from '../Repositorios/mongo-employee.repository.js';
import { EmpleadoController } from '../controllers/empleados.controllers.js';
import { validateDto } from '../middlewares/validateDto.js';
import { createEmployeeSchema, updateEmployeeSchema } from '../dtos/employee.dto.js';

const router = Router();
const employeeRepository = new MongoEmployeeRepository();
const empleadoController = new EmpleadoController(employeeRepository);

router.get('/employees', empleadoController.getEmpleado);
router.get('/employees/:id', empleadoController.getEmpleadoById);
router.post('/employees', validateDto(createEmployeeSchema), empleadoController.addEmpleado);
router.put('/employees/:id', validateDto(updateEmployeeSchema), empleadoController.updateEmployee);
router.delete('/employees/:id', empleadoController.deleteEmployee);

export default router;