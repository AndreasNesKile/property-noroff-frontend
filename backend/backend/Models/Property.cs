﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Property
    {
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(60)")]
        public string Name { get; set; }

        public int Value { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Line_1 { get; set; } // Street Address
        [Column(TypeName = "nvarchar(30)")]
        public string Line_2 { get; set; } // Apartment Number
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Municipality { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string City { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(40)")]
        public string Country { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(8)")]
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
