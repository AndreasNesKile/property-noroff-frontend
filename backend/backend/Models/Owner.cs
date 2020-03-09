using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string DNumber { get; set; }

        public DateTime CreatedAt { get; set; }

        public List<OwnershipLog> OwnershipLogs { get; set; }

    }
}
