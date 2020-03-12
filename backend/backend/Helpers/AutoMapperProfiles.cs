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
            CreateMap<Renovation, RenovationDTO>();
            CreateMap<Valuation, ValuationDTO>();
            CreateMap<OwnershipLog, OwnershipLogDTO>()
                .ForMember(
                    ow => ow.Owner,
                    opt => opt.MapFrom(src => src.Owner.Name)
                );
            CreateMap<Property, PropertyToListDTO>()
               .ForMember(
                    p => p.PropertyImages,
                    opt => opt.MapFrom(src => src.PropertyImages)
                );
            CreateMap<OwnerType, OwnerTypeDTO>();
            CreateMap<Account, AccountDTO>()
                .ForMember(
                    t => t.AccountType,
                    opt => opt.MapFrom(src => src.AccountType.Name)
                );
            CreateMap<Owner, OwnerDTO>();
        }
    }
}
