import type { EmployeeRepositoryInterface, EmployeeData } from './employee.repository.interface.js';
import EmpleadoModel from '../models/empleado.js';

export class MongoEmployeeRepository implements EmployeeRepositoryInterface {
  async createEmployee(employeeData: EmployeeData): Promise<any> {
    const newEmployee = new EmpleadoModel(employeeData);
    return await newEmployee.save();
  }

  async getAllEmployees(): Promise<any[]> {
    return await EmpleadoModel.find();
  }

  async getEmployeeById(employeeId: string): Promise<any> {
    return await EmpleadoModel.findById(employeeId);
  }

  async updateEmployee(employeeId: string, employeeData: Partial<EmployeeData>): Promise<any> {
    return await EmpleadoModel.findByIdAndUpdate(employeeId, employeeData, { new: true });
  }

  async deleteEmployee(employeeId: string): Promise<void> {
    await EmpleadoModel.findByIdAndDelete(employeeId);
  }
}