using AutoMapper;
using EntityFrameworkCore.CommonTools;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyrtexTestCase.Data;
using MyrtexTestCase.DTO;
using MyrtexTestCase.Extensions;
using MyrtexTestCase.Helpers;
using MyrtexTestCase.Models;
using MyrtexTestCase.SortingAndFilters;

namespace MyrtexTestCase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly MyrTexContext _dbContext;
        private readonly IMapper _mapper;
        private ISortHelper<Employee> _sortHelper;

        public EmployeeController(MyrTexContext dbContext, IMapper mapper, ISortHelper<Employee> sortHelper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _sortHelper = sortHelper;
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody]CreateEmployeeRequestDTO employeeDTO)
        {
            var employee = _mapper.Map<CreateEmployeeRequestDTO, Employee>(employeeDTO);
            await _dbContext.Departments.LoadAsync();
            await _dbContext.AddAsync(employee);
            await _dbContext.SaveChangesAsync();

            return Ok(_mapper.Map<Employee, EmployeeDTO>(employee));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody] CreateEmployeeRequestDTO updateEmployee)
        {
            if (updateEmployee == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!_dbContext.Employees.Any(e => e.Id == id))
            {
                return NotFound();
            }

            var employee = _mapper.Map<CreateEmployeeRequestDTO, Employee>(updateEmployee);
            employee.Id = id;
            _dbContext.Entry(employee).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(new { message = "Employee update successfully." });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDTO>> GetEmployeeByIdAsync(int id)
        {
            var employee = await _dbContext.Employees.Include(e => e.Department).SingleOrDefaultAsync(e => e.Id == id);

            return Ok(_mapper.Map<Employee, EmployeeDTO>(employee));
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeDTO>>> GetAll([FromQuery] EmployeeFilter filter)
        {
            var query = _dbContext.Employees.AsQueryable();
            query = FilterApplyment.ApplyFilter(query, filter);
            query = _sortHelper.ApplySort(query, filter.Sort);
            var employees = await query.Include(e => e.Department).ToListAsync();

            return Ok(_mapper.Map<List<Employee>, List<EmployeeDTO>>(employees));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _dbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            _dbContext.Employees.Remove(employee);
            await _dbContext.SaveChangesAsync();

            return Ok(new { message = "Employee deleted successfully." });
        }
    }
}

