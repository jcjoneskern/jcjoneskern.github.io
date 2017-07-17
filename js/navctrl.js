(function() {

  var app = angular.module("portfolio");

  app.controller('navCtrl', function($rootScope, $location, $scope) {
    $rootScope.$on('$routeChangeSuccess', function() {
      if($location.path() === '/') {
        $scope.status0 = 'active';
        $scope.status1 = 'inactive';
        $scope.status2 = 'inactive';
        $scope.status3 = 'inactive';
      } else if ($location.$$path === '/about') {
        $scope.status1 = 'active';
        $scope.status0 = 'inactive';
        $scope.status2 = 'inactive';
        $scope.status3 = 'inactive';
      } else if ($location.$$path === '/portfolio') {
        $scope.status2 = 'active';
        $scope.status1 = 'inactive';
        $scope.status0 = 'inactive';
        $scope.status3 = 'inactive';
      } else if ($location.$$path === '/contact') {
        $scope.status3 = 'active';
        $scope.status1 = 'inactive';
        $scope.status2 = 'inactive';
        $scope.status0 = 'inactive';
      }
    });

  });

})();
