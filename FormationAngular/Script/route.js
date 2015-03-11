angular.module("MyApp").config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: "../View/main.html"
        })
        .state("main.list", {
            url: "list",
            templateUrl: "../View/list.html",
            controller: "bankAccountController"
        })
        .state("main.operations", {
            url: "operations/{id}",
            templateUrl: "../View/operation.html",
            controller: "bankOperationController",
            resolve: {
                id: ['$stateParams', function ($stateParams) {
                    return $stateParams.id;
                }]
            }
        })
        .state("main.minus", {
            url: "minus",
            templateUrl: "../View/minus.html",
            controller: "bankAccountController"
        });
});