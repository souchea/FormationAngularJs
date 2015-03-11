using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FormationAngular.Database.Model
{
    public class AccountDto
    {
        public int id { get; set; }

        public string accountNumber { get; set; }

        public string familyName { get; set; }

        public string firstName { get; set; }

        public int amount { get; set; }

        public string email { get; set; }
    }
}
