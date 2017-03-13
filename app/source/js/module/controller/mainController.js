/**
 * Created by tedyuen on 13/03/2017.
 */
tgApp.controller('mainController',['$rootScope','$scope','$cookies','$timeout',function ($rootScope,$scope,$cookies,$timeout) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      // console.info(fromState + "->" + toState, toParams, fromParams);
    }
  )
  //
  $timeout(function () {
    var uiState = new UiState();
    uiState.ready()
  },50);
}]);
