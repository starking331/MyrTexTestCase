using AutoMapper;
using MyrtexTestCase.DTO;
using MyrtexTestCase.Models;

namespace MyrtexTestCase.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<CreateEmployeeRequestDTO, Employee>();
            this.CreateMap<Employee, EmployeeDTO>()
                .ForMember(dist => dist.Department,
                opt => opt.MapFrom(src => src.Department.Name));
            this.CreateMap<Department, DepartmentDTO>();
            this.CreateMap<Employee, CreateEmployeeRequestDTO>();
        }
    }
}
