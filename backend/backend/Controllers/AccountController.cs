using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using backend.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        private readonly IMapper _mapper;

        public AccountController(IAccountRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Buyer, Agent")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAccount(int id)
        {
            var account = await _repo.GetAccount(id);
            if (account == null) return NotFound("Account not found");
            else
            {
                var accountToReturn = _mapper.Map<AccountDTO>(account);
                return Ok(accountToReturn);
            }
        }

        /*[HttpPut("{id}")]
        public async  */
    }
}