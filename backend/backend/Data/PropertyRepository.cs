using backend.DTO;
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

        public async Task<IEnumerable<PropertyDTO>> GetProperties()
        {
           var result = await _context.Properties.ToListAsync();
            List<PropertyDTO> properties = new List<PropertyDTO>();
            foreach(var property in result)
            {
                PropertyDTO prop = new PropertyDTO
                {
                    Id = property.Id,
                    Name = property.Name,
                    Value = property.Value,
                    Line_1 = property.Line_1,
                    Line_2 = property.Line_2,
                    Municipality = property.Municipality,
                    City = property.City,
                    Country = property.Country,
                    ZipCode = property.ZipCode,
                    CreatedAt = property.CreatedAt,
                    PropertyStatusId = property.PropertyStatusId,
                    PropertyTypeId = property.PropertyTypeId
                };
                properties.Add(prop);
            }
            return properties;
        }

        public async Task<PropertyDTO> GetProperty(int propertyId)
        {
            var result = await _context.Properties.Where(property => property.Id == propertyId).SingleAsync();
            PropertyDTO fetchedProperty = new PropertyDTO
            {
                Id = result.Id,
                Name = result.Name,
                Value = result.Value,
                Line_1 = result.Line_1,
                Line_2 = result.Line_2,
                Municipality = result.Municipality,
                City = result.City,
                Country = result.Country,
                ZipCode = result.ZipCode,
                CreatedAt = result.CreatedAt,
                PropertyStatusId = result.PropertyStatusId,
                PropertyTypeId = result.PropertyTypeId
            };
        return fetchedProperty;
        }
    }
}
