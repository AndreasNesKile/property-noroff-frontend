using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using backend.DTO;
using backend.Models;
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
            if(User.HasClaim(x => x.Type == ClaimTypes.Email))
            {
                var userEmail = User.FindFirst(ClaimTypes.Email).Value;

                var account = await _repo.GetAccountByEmail(userEmail);

                if (account == null) 
                {
                    var accountToCreate = new Account
                    {
                        Email = userEmail,
                        Active = true,
                        AccountType = await _repo.GetAccountTypeByName(User.FindFirst("https://property.com/roles").Value)
                    };

                    var createdAccount = await _repo.CreateAccount(accountToCreate);

                    var accountToReturn = _mapper.Map<AccountDTO>(createdAccount);

                    return Ok(accountToReturn);
                }
                else
                {
                    var accountToReturn = _mapper.Map<AccountDTO>(account);
                    return Ok(accountToReturn);
                }
            }
            else
            {
                return Unauthorized("User lacks necessary credentials");
            }

        }
        
        [HttpPut("{id}")]
        [Authorize(Roles = "Buyer, Agent")]
        public async Task<IActionResult> UpdateAccount(int id, AccountForUpdateDTO accountForUpdate)
        {
            if (User.HasClaim(x => x.Type == ClaimTypes.Email))
            {
                var userEmail = User.FindFirst(ClaimTypes.Email).Value;

                var account = await _repo.GetAccountByEmail(userEmail);

                _mapper.Map(accountForUpdate, account);

                if(await _repo.SaveAll())
                {
                    return NoContent();
                }
                return Ok("User already updated, no changes applied");
            }
            else
            {
                return Unauthorized("User lacks necessary credentials");
            }
        }
    }
}