using AutoMapper;
using backend.DTO;
using backend.Models;

namespace backend.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Property, PropertyToListDTO>();
            CreateMap<Account, AccountDTO>()
                .ForMember(
                t => t.AccountType, 
                opt => opt.MapFrom(src => src.AccountType.Name));
        }
    }
}
