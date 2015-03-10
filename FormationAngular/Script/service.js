angular.module("MyApp").service('accountData', function() {
     return {
       getAccountData: 
          [{
            "id" : 1,
           "familyName": "John", 
           "firstName": "Toto2",
           "email": "souchet.aurelien@gmail.com",
           "accountNumber": 7, 
           "amount": -12
          },
          {
            "id" : 1,
           "familyName": "John", 
           "firstName": "Toto3",
           "email": "souchet.aurelien@gmail.com",
           "accountNumber": 45, 
           "amount": 75
          },
          {
            "id" : 1,
           "familyName": "John", 
           "firstName": "Toto4",
           "email": "souchet.aurelien@gmail.com",
           "accountNumber": 4, 
           "amount": 654
          },
          {
            "id" : 1,
           "familyName": "John", 
           "firstName": "Toto",
           "email": "souchet.aurelien@gmail.com",
           "accountNumber": 6, 
           "amount": 45
          }
    ]}
});