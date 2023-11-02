using MyrtexTestCase.Models;

namespace MyrtexTestCase.DTO
{
    public class EmployeeDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfEmployment { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }
    }
}
