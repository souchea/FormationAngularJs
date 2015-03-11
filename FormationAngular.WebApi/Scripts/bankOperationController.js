angular.module("MyApp").controller('bankOperationController', ['$scope', 'accountData', '$stateParams',
  function (scope, accountData, stateParams) {
      scope.accounts = accountData.getAccountData;

      scope.isModifying = false;

      scope.selectedAccount = scope.accounts[0];

      if (stateParams.id) {
          scope.selectedAccountId = stateParams.id;
      } else {
          scope.selectedAccountId = scope.accounts[0].id;
      }

      scope.addMoney = function () {
          scope.selectedAccount.amount += parseInt(scope.toChangeValue, 10);
          accountData.modifyAccount(scope.selectedAccount);
          scope.isModifying = false;
      };

      scope.removeMoney = function () {
          scope.selectedAccount.amount -= parseInt(scope.toChangeValue, 10);
          accountData.modifyAccount(scope.selectedAccount);
          scope.isModifying = false;
      };

      scope.$watch('selectedAccountId', function () {
          for (var i = 0; i < scope.accounts.length; i++) {
              if (scope.accounts[i].id == scope.selectedAccountId) {
                  scope.selectedAccount = scope.accounts[i];
              }
          }
      });
  }
]);