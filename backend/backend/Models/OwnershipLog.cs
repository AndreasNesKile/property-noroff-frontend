using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class OwnershipLog
    {
        public int Id { get; set; }

        [Required]
        public DateTime DateAcquired { get; set; }
        public DateTime DateSold { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [Required]
        public Property Property { get; set; }

        [Required]
        public int PropertyId { get; set; }
        [Required]
        public Owner Owner { get; set; }

        [Required]
        public int OwnerId { get; set; }

    }
}
