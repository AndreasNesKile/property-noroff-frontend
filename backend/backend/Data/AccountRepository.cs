using backend.DTO;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
    public class AccountRepository : IAccountRepository
    {
        private readonly PropertyDbContext _context;
        public AccountRepository(PropertyDbContext context)
        {
            _context = context;
        }

        public async Task<AccountDTO> GetAccount(int accountId)
        {
            var result = await _context.Accounts.Where(account => account.Id == accountId).SingleAsync();
            if(result != null)
            {
                AccountDTO account = new AccountDTO
                {
                    Id = result.Id,
                    Name = result.Name,
                    Surname = result.Surname,
                    Email = result.Email,
                    DateOfBirth = result.DateOfBirth,
                    Active = result.Active,
                    AccountTypeId = result.AccountTypeId
                };

                return account;
            } else
            {
                return null;
            }
          
        }

        /*        public async Task<AccountDTO> UpdateAccount(int accountId)
                {
                    return await _context.Accounts.Where(account => account.Id == accountId).SingleAsync(); ;
                }*/
    }
}
