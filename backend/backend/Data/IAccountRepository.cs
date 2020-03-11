using backend.DTO;
using backend.Models;
using System.Threading.Tasks;

namespace backend.Data
{
    public interface IAccountRepository
    {
        Task<Account> GetAccount(int id);
        //Task<AccountDTO> UpdateAccount(int accountId);
    }
}