using backend.DTO;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly PropertyDbContext _context;

        public PropertyRepository(PropertyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Property>> GetProperties()
        {
            var result = await _context.Properties.ToListAsync();

            return result;
        }

        public async Task<Property> GetProperty(int propertyId)
        {
            var result = await _context.Properties.Where(property => property.Id == propertyId).FirstOrDefaultAsync();

            return result;
        }
    }
}
