angular.module("MyApp").factory("Account", [
    "$resource",
    function($resource) {
        return $resource("http://localhost:56018/api/Account/:accountId",
        {
            'get': { method: "GET", accountId: "@id" },
            'save': { method: "POST" },
            'query': { method: "GET" },
            isArray: true
        });
    }
]);