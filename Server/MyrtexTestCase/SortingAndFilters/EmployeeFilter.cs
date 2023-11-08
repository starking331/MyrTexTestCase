using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace MyrtexTestCase.SortingAndFilters
{
    public class EmployeeFilter
    {
        public string? Sort { get; set; }
        public string? Name {  get; set; }
        public string? Department { get; set; }
        public DateTime? DayOfBirth { get; set; }
        public DateTime? DayOfEmployment { get; set; }
        public int? Salary { get; set;}
    }
}
