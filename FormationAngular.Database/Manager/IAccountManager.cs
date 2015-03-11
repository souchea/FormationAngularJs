using System;
using FormationAngular.Database.Model;

namespace FormationAngular.Database.Manager
{
    public interface IAccountManager
    {
        void AddAccount(FormationAngular.Database.Model.Account toAdd);
        FormationAngular.Database.Model.Account GetAccountById(int id);
        System.Collections.Generic.List<FormationAngular.Database.Model.Account> GetAllAccounts();
        void RemoveAccount(FormationAngular.Database.Model.Account toRemove);
        void ModifyAccount(AccountDto accountToModify);
    }
}
