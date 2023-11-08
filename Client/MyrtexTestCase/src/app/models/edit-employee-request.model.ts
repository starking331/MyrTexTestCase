export interface EditEmployeeModel {
    id: number;
    name: string;
    dateOfBirth: Date | null;
    dateOfEmployment: Date | null;
    salary: number;
    departmentId: number;
}