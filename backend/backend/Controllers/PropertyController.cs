using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using backend.DTO;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/properties")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyRepository _repo;
        private readonly IMapper _mapper;

        public PropertyController(IPropertyRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetProperties()
        {
            var properties = await _repo.GetProperties();
            if (properties == null)
            {
                return NotFound(properties);
            }
            else
            {
                var propertiesToReturn = _mapper.Map<IEnumerable<PropertyToListDTO>>(properties);
                return Ok(propertiesToReturn);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public async Task<IActionResult> GetProperty(int id)
        {
            var property = await _repo.GetProperty(id);
            if(property == null)
            {
                return NotFound(property);
            } else
            {
                //var propertyToReturn = _mapper.Map<PropertyDetailsToGuestDTO>(property);
                var propertyToReturn = _mapper.Map<PropertyDetailsToBuyerDTO>(property);
                //var propertyToReturn = _mapper.Map<PropertyDetailsToAgentDTO>(property);
                return Ok(propertyToReturn);
            }
        }


    }
}