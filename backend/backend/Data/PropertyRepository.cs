using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
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
            return await _context.Properties.ToListAsync();
        }

        public async Task<IEnumerable<Property>> GetProperty(int id)
        {
            return await _context.Properties.Where(property => property.Id == id).ToListAsync();
        }
    }
}
