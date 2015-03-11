namespace FormationAngular.Database.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Account")]
    public partial class Account
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string AccountNumber { get; set; }

        [Required]
        [StringLength(50)]
        public string FamilyName { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        public int Credit { get; set; }

        [Required]
        [StringLength(255)]
        public string Email { get; set; }
    }
}
