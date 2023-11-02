using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyrtexTestCase.Models;

namespace MyrtexTestCase.Data.Configurations
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired().HasMaxLength(255);
            builder.Property(p => p.DateOfBirth).IsRequired();
            builder.Property(p => p.DateOfEmployment).IsRequired();
            builder.Property(p => p.Salary).IsRequired();
            builder.HasOne(p => p.Department).WithMany().HasForeignKey(p => p.DepartmentId);
        }
    }
}
