using backend.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Data
{
    public interface IPropertyRepository
    {
        Task<IEnumerable<PropertyDTO>> GetProperties();
        Task<PropertyDTO> GetProperty(int id);
    }
}