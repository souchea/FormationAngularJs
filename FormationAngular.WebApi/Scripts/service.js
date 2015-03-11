angular.module("MyApp").service('accountData',[
    "Account",
    function(Account) {
        return {
            getAccountData: Account.query(),

            modifyAccount: function(account) {
                Account.save(account);
            },

            addAccount: function(account) {
                getAccountData.push(account);
            }
        }
    }
]);
