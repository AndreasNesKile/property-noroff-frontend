using backend.DTO;
using backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Data
{
    public interface IPropertyRepository
    {
        Task<IEnumerable<Property>> GetProperties();
        Task<Property> GetProperty(int id);
    }
}