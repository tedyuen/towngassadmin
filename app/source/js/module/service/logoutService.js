tgApp.service('logoutService',['$rootScope','$state','$cookies',function ($rootScope,$state,$cookies) {
  this.logout = function () {
    $rootScope.loginUser = undefined;
    $cookies.remove('lvdiUser');
    // interfaceService.logout({}, function(data, headers, config) {
    //   console.log(JSON.stringify(data));
    //
    //   $rootScope.loginUser = undefined;
    //   $cookies.remove('lvdiUser');
    //   // $state.go('login');
    // });
  }
}]);
