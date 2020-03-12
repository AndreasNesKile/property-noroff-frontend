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
            CreateMap<OwnerType, OwnerTypeDTO>();
            CreateMap<Owner, OwnerDTO>()
                .ForMember(
                    ow => ow.OwnerType, 
                    opt => opt.MapFrom(src => src.OwnerType)
                );
            CreateMap<OwnershipLog, OwnershipLogDTO>()
                .ForMember(
                    owt => owt.Owner,
                    opt => opt.MapFrom(src => src.Owner)
                );
            CreateMap<Property, PropertyToListDTO>()
               .ForMember(
                    p => p.PropertyImages,
                    opt => opt.MapFrom(src => src.PropertyImages)
                )
                    .ForMember(
                        o => o.OwnershipLogs,
                        opt => opt.MapFrom(src => src.OwnershipLogs)
                    );
            CreateMap<Account, AccountDTO>()
                .ForMember(
                    t => t.AccountType,
                    opt => opt.MapFrom(src => src.AccountType.Name)
                );
        }
    }
}
