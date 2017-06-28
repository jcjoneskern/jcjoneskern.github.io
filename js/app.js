(function() {
  let app = angular.module("portfolio", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "views/home.html"
    })
    .when("/about", {
      templateUrl: "views/about.html"
    })
    .when("/portfolio", {
      templateUrl: "views/portfolio.html",
      controller: "portfolioCtrl"
    })
    .when("/contact", {
      templateUrl: "views/contact.html"
    })
    .otherwise("/");
  });

  app.directive("portfolioItem", function() {
    return {
      restrict: "EAC",
      templateUrl: "views/partialportfolio.html"
    }
  });

})();
