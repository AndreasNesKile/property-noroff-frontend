using AutoMapper;
using backend.DTO;
using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Helpers
{
    public class AutoMapperProfiles : Profile 
    {
        public AutoMapperProfiles()
        {
            CreateMap<Property, PropertyToListDTO>();
            CreateMap<Account, AccountDTO>();
        }
    }
}
