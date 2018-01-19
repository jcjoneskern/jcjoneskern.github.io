(function() {
  let app = angular.module("portfolio", ["ngRoute", "ngAnimate"]);

  app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "views/home.html",
      controller: "portfolioCtrl"
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


// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });

// // Scroll certain amounts from current position 
// window.scrollBy({
//   top: 100, // could be negative value
//   left: 0,
//   behavior: 'smooth'
// });

// // Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({
//   behavior: 'smooth'
// });