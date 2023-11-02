using MyrtexTestCase.Data;
using MyrtexTestCase.Models;

namespace MyrtexTestCase
{
    public class Seed
    {
        private readonly MyrTexContext _context;

        public Seed(MyrTexContext context)
        {
            _context = context;
        }

        public void SeedMyrTexContext()
        {
            if (!_context.Departments.Any())
            {
                var departments = new List<Department>()
                {
                    new Department()
                    {
                        Name = "IT Отдел"
                    },
                    new Department()
                    {

                        Name = "HR Отдел"
                    },
                    new Department()
                    {
                        Name = "Отдел маркетинга"
                    },
                    new Department()
                    {
                        Name = "Отдел технической поддержки"
                    }
                };
                _context.Departments.AddRange(departments);
                _context.SaveChanges();
            }

            if (!_context.Employees.Any())
            {
                var employees = new List<Employee>()
                {
                    new Employee()
                    {
                        Name = "Баженов Артемий Александрович",
                        DateOfBirth = new DateTime(2001, 6, 25),
                        DateOfEmployment = new DateTime(2023, 5, 11),
                        Salary = 70000,
                        DepartmentId = 1
                    },
                    new Employee()
                    {
                        Name = "Иванов Иван Иванович",
                        DateOfBirth = new DateTime(2000, 1, 1),
                        DateOfEmployment = new DateTime(2020, 5, 24),
                        Salary = 50000,
                        DepartmentId = 2
                    },
                    new Employee()
                    {
                        Name = "Петров Пётр Петрович",
                        DateOfBirth = new DateTime(1999, 3, 13),
                        DateOfEmployment = new DateTime(2010, 4, 15),
                        Salary = 60000,
                        DepartmentId = 3
                    },
                    new Employee()
                    {
                        Name = "Соловьёв Кирилл Викторович",
                        DateOfBirth = new DateTime(1980, 8,19),
                        DateOfEmployment = new DateTime(2011, 9, 17),
                        Salary = 70000,
                        DepartmentId = 4
                    },
                    new Employee()
                    {
                        Name = "Голубина Ольга Викторовна",
                        DateOfBirth = new DateTime(1980, 5, 22),
                        DateOfEmployment = new DateTime(2021, 3, 15),
                        Salary = 80000,
                        DepartmentId = 2
                    }

                };
                _context.Employees.AddRange(employees);
                _context.SaveChanges();
            }
        }
    }
}