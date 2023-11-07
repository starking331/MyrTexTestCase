export interface CreateEmployeeRequest {
    name: string;
    departmentId: number;
    dateOfBirth: Date | null;
    dateOfEmployment: Date | null;
    salary: number
}