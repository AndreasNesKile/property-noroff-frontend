using backend.DTO;
using System.Threading.Tasks;

namespace backend.Data
{
    public interface IAccountRepository
    {
        Task<AccountDTO> GetAccount(int id);
        //Task<AccountDTO> UpdateAccount(int accountId);
    }
}