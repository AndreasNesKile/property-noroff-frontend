using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Value { get; set; }
        public string Line_1 { get; set; } // Street Address
        public string Line_2 { get; set; } // Apartment Number

        public string Municipality { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public DateTime CreatedAt { get; set; }

        public List<PropertyImage> PropertyImages { get; set; }
        public List<Renovation> Renovations { get; set; }
        public List<Valuation> Valuations { get; set; }

        public List<OwnershipLog> OwnershipLogs { get; set; }

    
        public PropertyStatus PropertyStatus { get; set; }
        public int PropertyStatusId { get; set; }
        public PropertyType PropertyType { get; set; }
        public int PropertyTypeId { get; set; }


    }
}
