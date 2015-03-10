angular.module("MyApp").directive('mytab', function() {
  var directiveDefinitionObjet = {
    priority: 0,
    templateUrl: '../Template/template.html',
    replace: true,
    transclude: false,
    //scope: { accounts : "=bindaccounts" },
    scope: false,
    link: function postLink(scope, iElements, iAttrs, controller) {
    }
  };
  return directiveDefinitionObjet;
});