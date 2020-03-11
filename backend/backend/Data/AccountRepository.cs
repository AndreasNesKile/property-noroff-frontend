using backend.DTO;
using backend.Models;
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

        public async Task<Account> GetAccount(int accountId)
        {
            var result = await _context.Accounts.Where(account => account.Id == accountId).Include(t => t.AccountType).FirstOrDefaultAsync();

            if(result != null)
            {
                return result;
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
