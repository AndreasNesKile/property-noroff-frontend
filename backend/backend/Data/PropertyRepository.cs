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

            var properties = await _context.Properties
                .Include(p => p.PropertyImages)
                .Include(r => r.Renovations)
                .Include(v => v.Valuations)
                .Include(o => o.OwnershipLogs)
                .ToListAsync();

            return properties;
        } 

        public async Task<Property> GetProperty(int propertyId)
        {
            var result = await _context.Properties.Where(property => property.Id == propertyId)
                .Include(p => p.PropertyImages)
                .Include(r => r.Renovations)
                .Include(v => v.Valuations)
                .Include(o => o.OwnershipLogs)
                .FirstOrDefaultAsync();

            return result;
        }
    }
}
