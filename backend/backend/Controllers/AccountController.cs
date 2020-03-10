using System.Threading.Tasks;
using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;

        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAccount(int id)
        {
            var account = await _repo.GetAccount(id);
            if (account == null) return NotFound("Account not found");
            else return Ok(account);
        }

        /*[HttpPut("{id}")]
        public async  */
    }
}