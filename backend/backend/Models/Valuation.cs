using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Valuation
    {
        public int Id { get; set; }
        public string Comments { get; set; }
        public int Value { get; set; }
        public DateTime ValuationDate { get; set; }
        public Property Property { get; set; }

        public int PropertyId { get; set; }
    }
}
