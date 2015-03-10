var app = angular.module("MyApp", []);

angular.module("MyApp").controller('bankAccountController', ['$scope', 'accountData',
  function(scope, accountData) {
    scope.accounts = accountData.getAccountData;

    scope.isModifying = false;

    scope.toAdd = 0;
    scope.toSubtract = 0;
    scope.selectedIndex = 0;

    scope.modifyAccount = function(ind) {
      scope.toAdd = 0;
      scope.toSubtract = 0;
      scope.selectedIndex = ind;
      scope.isModifying = true;
    };

    scope.addClient = function() {
      scope.accounts.push({
        "id": 1,
        "familyName": scope.toAddFamilyName,
        "firstName": scope.toAddFirstName,
        "email": scope.toAddEmail,
        "accountNumber": 45,
        "amount": scope.toAddCredit
      });
    };
    
    scope.clientWrong = function() {
      if (!scope.toAddFamilyName || scope.toAddFamilyName === '' 
          || !scope.toAddFirstName || scope.toAddFirstName === ''
          || !scope.toAddEmail || scope.toAddEmail === ''
          || !scope.toAddCredit || isNaN(scope.toAddCredit)) {
        return true;
      } 
      return false;
    };
    
    scope.addMoney = function() {
      scope.accounts[scope.selectedIndex].amount += parseInt(scope.toAdd, 10);
      scope.isModifying = false;
    };

    scope.removeMoney = function() {
      scope.accounts[scope.selectedIndex].amount -= parseInt(scope.toSubtract, 10);
      scope.isModifying = false;
    };
  }
]);