using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyrtexTestCase.Data;
using MyrtexTestCase.DTO;
using MyrtexTestCase.Helpers;
using MyrtexTestCase.Models;
using MyrtexTestCase.SortingAndFilters;

namespace MyrtexTestCase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly MyrTexContext _dbContext;
        private readonly IMapper _mapper;
        private ISortHelper<Employee> _sortHelper;

        public DepartmentController(MyrTexContext dbContext, IMapper mapper, ISortHelper<Employee> sortHelper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _sortHelper = sortHelper;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeDTO>>> GetAll()
        {
            var departments = await _dbContext.Departments.ToListAsync();
            return Ok(_mapper.Map<List<Department>, List<DepartmentDTO>>(departments));
        }
    }
}
