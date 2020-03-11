using AutoMapper;
using backend.DTO;
using backend.Models;

namespace backend.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<PropertyImage, PropertyImageDTO>();
            CreateMap<Property, PropertyToListDTO>()
                .ForMember(
                    p => p.PropertyImages, 
                    opt => opt.MapFrom(src => src.PropertyImages)
                );
            CreateMap<Account, AccountDTO>()
                .ForMember(
                t => t.AccountType,
                opt => opt.MapFrom(src => src.AccountType.Name));
        }
    }
}
