using System;

namespace backend.DTO
{
    public class OwnershipLogDTO
    {
        public DateTime DateAcquired { get; set; }
        public DateTime DateSold { get; set; }
        public DateTime CreatedAt { get; set; }
        public OwnerToPropertyDetailDTO Owner { get; set; }
        public int OwnerId { get; set; }

    }
}
