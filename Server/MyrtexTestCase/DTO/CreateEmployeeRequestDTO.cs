using MyrtexTestCase.Models;

namespace MyrtexTestCase.DTO
{
    public class CreateEmployeeRequestDTO
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfEmployment { get; set; }
        public int Salary { get; set; }
    }
}
