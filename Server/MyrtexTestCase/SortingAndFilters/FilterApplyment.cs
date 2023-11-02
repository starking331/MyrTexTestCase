using Microsoft.EntityFrameworkCore;
using MyrtexTestCase.Extensions;
using MyrtexTestCase.Models;

namespace MyrtexTestCase.SortingAndFilters
{
    internal static class FilterApplyment
    {
        internal static IQueryable<Employee> ApplyFilter(IQueryable<Employee> query, EmployeeFilter filter)
        {
            if (!string.IsNullOrWhiteSpace(filter.Name))
            {
                query = query.FilterByName(filter.Name);
            }

            if (filter.DepartmentId != null)
            {
                query = query.FilterByDepartment(filter.DepartmentId);
            }

            if(filter.Salary != null)
            {
                query = query.FilterBySalary(filter.Salary);
            }

            if(filter.DayOfBirth != null)
            {
                query = query.FilterByBirthDate(filter.DayOfBirth);
            }

            if(filter.DayOfEmployment != null)
            {
                query = query.FilterByEmploymentDate(filter.DayOfEmployment);
            }

            return query;
        }
    }
}
