using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FormationAngular.Database.Model;

namespace FormationAngular.Database.Manager
{
    public class AccountManager : IAccountManager
    {
        protected FormationAngularDataContext Context { get; set; }

        public AccountManager()
        {
                Context = new FormationAngularDataContext();
        }

        ~AccountManager()
        {
            Context.Dispose();
        }

        public List<Account> GetAllAccounts()
        {
            return (from account in Context.Accounts
                select account).ToList();
        }

        public Account GetAccountById(int id)
        {
            return (from account in Context.Accounts
                    where account.Id == id
                    select account).Single();
        }

        public void ModifyAccount(AccountDto accountToModify)
        {
            var selectedAccount = (from account in Context.Accounts
                    where account.Id == accountToModify.id
                    select account).Single();
            selectedAccount.Credit = accountToModify.amount;
            Context.SaveChanges();
        }

        public void AddAccount(Account toAdd)
        {
            Context.Accounts.Add(toAdd);
            Context.SaveChanges();
        }

        public void RemoveAccount(Account toRemove)
        {
            var rem = Context.Accounts.Single(ac => ac.Id == toRemove.Id);
            Context.Accounts.Remove(rem);
        }
    }
}