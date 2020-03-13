using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Helpers;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IPropertyRepository _repo;

        public AuthController(IPropertyRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Authenticate()
        {
            string role = TokenDecoder.GetUserRole(Request);

            if (role == "Agent")
            {
                return Ok(role);
            }
            else
            {
                return Ok();
            }
        }

    }
}