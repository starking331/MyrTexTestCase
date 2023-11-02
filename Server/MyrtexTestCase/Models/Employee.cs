namespace MyrtexTestCase.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfEmployment { get; set; }
        public int Salary { get; set; }
        public Department Department { get; set; }
        public int DepartmentId { get; set; }
    }
}
