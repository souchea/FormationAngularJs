using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using FormationAngular.Database.Manager;
using FormationAngular.Database.Model;

namespace FormationAngular.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        protected IAccountManager AccountManager { get; set; }

        public AccountController(IAccountManager accountManager)
        {
            AccountManager = accountManager;
        }

        public AccountController()
        {
           AccountManager = new AccountManager();
        }

        public IHttpActionResult Get()
        {
            var json = (from account in AccountManager.GetAllAccounts()
                        select new
                        {
                            id =  account.Id,
                            familyName = account.FamilyName,
                            firstName = account.FirstName,
                            email = account.Email,
                            accountNumber = account.AccountNumber,
                            amount = account.Credit
                        }).ToList();

            return Ok(json);
        }

        public void Post([FromBody]AccountDto account)
        {
            AccountManager.ModifyAccount(account);
        }

        public IHttpActionResult Get(int id)
        {
            var account = AccountManager.GetAccountById(id);

            return Ok(new
            {
                id = account.Id,
                familyName = account.FamilyName,
                firstName = account.FirstName,
                email = account.Email,
                accountNumber = account.AccountNumber,
                amount = account.Credit
            });
        }
    }
}
