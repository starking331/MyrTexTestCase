using EntityFrameworkCore.CommonTools;
using MyrtexTestCase.Models;

namespace MyrtexTestCase.Extensions
{
    public static class ExtensionsFilter
    {
        [Expandable]
        public static IQueryable<Employee> FilterByName(this IEnumerable<Employee> employees, string name)
        {
            return employees.AsQueryable().Where(e => e.Name.ToLower().Contains(name.ToLower()));
        }

        [Expandable]
        public static IQueryable<Employee> FilterByDepartment(this IEnumerable<Employee> employees, string? departmentName)
        {
            return employees.AsQueryable().Where(e => e.Department.Name.ToLower().Contains(departmentName.ToLower()));
        }

        [Expandable]
        public static IQueryable<Employee> FilterBySalary(this IEnumerable<Employee> employees, int? salary)
        {
            return employees.AsQueryable().Where(e => e.Salary == salary);
        }

        [Expandable]
        public static IQueryable<Employee> FilterByBirthDate(this IEnumerable<Employee> employees, DateTime? birthDate)
        {
            return employees.AsQueryable().Where(e => e.DateOfBirth.Date == birthDate);
        }

        [Expandable]
        public static IQueryable<Employee> FilterByEmploymentDate(this IEnumerable<Employee> employees, DateTime? dateOfDeployment)
        {
            return employees.AsQueryable().Where(e => e.DateOfEmployment == dateOfDeployment);
        }
    }
}
