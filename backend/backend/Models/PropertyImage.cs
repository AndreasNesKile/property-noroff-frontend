using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class PropertyImage
    {
        public int Id { get; set; }
        public string Url { get; set; }

        public int PropertyId { get; set; }
        public Property Property { get; set; }
    }
}
