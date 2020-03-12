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
       /*     var resultOwnershipLog = await (from owner in _context.Set<Owner>()
                                      join ownershiplogs in _context.Set<OwnershipLog>()
                                          on owner.Id equals ownershiplogs.Owner.Id into logs
                                      from ownershiplogs in logs.DefaultIfEmpty()
                                      select new OwnershipLogDTO(){ 
                                          CreatedAt = ownershiplogs.CreatedAt,
                                          DateAcquired = ownershiplogs.DateAcquired,
                                          DateSold = ownershiplogs.DateSold,
                                          Owner = new OwnerDTO() {
                                              Id = owner.Id,
                                              Name = owner.Name,
                                              Surname = owner.Surname,
                                              Email = owner.Email,
                                              OwnerType = owner,
                                              Phone  = owner.Phone,
                                          }
                                      }).ToListAsync();*/

            var properties = await _context.Properties
                .Include(p => p.PropertyImages)
                .Include(r => r.Renovations)
                .Include(v => v.Valuations)
                .Include(o => o.OwnershipLogs).ToListAsync();

            
            /*

            var properties = await (from property in _context.Set<Property>()
                             select new Property()
                             {
                                 PropertyImages = property.PropertyImages,
                                 Renovations = property.Renovations,
                                 Valuations = property.Valuations,
                                 OwnershipLogs = 
                             }).ToListAsync();*/

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
