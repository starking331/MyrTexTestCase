using Microsoft.EntityFrameworkCore;
using MyrtexTestCase.Models;
using System.Reflection;

namespace MyrtexTestCase.Data
{
    public class MyrTexContext : DbContext
    {
        public MyrTexContext(DbContextOptions options) : base(options) { }

        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
