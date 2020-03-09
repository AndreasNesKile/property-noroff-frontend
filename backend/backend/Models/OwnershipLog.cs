using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class OwnershipLog
    {
        public int Id { get; set; }

        public DateTime DateAcquired { get; set; }
        public DateTime DateSold { get; set; }
        public DateTime CreatedAt { get; set; }
        public Property Property { get; set; }

        public int PropertyId { get; set; }
        public Owner Owner { get; set; }

        public int OwnerId { get; set; }

    }
}
