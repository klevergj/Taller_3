export interface EmployeeData {
  nombre: string;
  cargo: string;
  departamento: string;
  sueldo: number;
}

export interface EmployeeRepositoryInterface {
  createEmployee(employeeData: EmployeeData): Promise<any>;
  getEmployeeById(employeeId: string): Promise<any>;
  updateEmployee(employeeId: string, employeeData: Partial<EmployeeData>): Promise<any>;
  deleteEmployee(employeeId: string): Promise<void>;
  getAllEmployees(): Promise<any[]>;
}