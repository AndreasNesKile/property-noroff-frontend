using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data;
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

        public PropertyController(IPropertyRepository repo)
        {
            _repo = repo;
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
                return Ok(properties);
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
                return Ok(property);
            }
        }


    }
}