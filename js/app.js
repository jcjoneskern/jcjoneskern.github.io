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
      templateUrl: "views/portfolio.html"
    })
    .when("/contact", {
      templateUrl: "views/contact.html"
    })
    .otherwise("/");
  });

})();
