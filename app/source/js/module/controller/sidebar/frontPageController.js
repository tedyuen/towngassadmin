/**
 * Created by tedyuen on 13/03/2017.
 */
tgApp.controller('frontPageController',['$scope','$log'
  ,function ($scope,$log) {

    $scope.result = "{}";
    $scope.test="helloworld!";


    $scope.testLog = function () {
      $log.debug("hello debug!");
      $log.error("hello error!");
      $log.info("hello info!");
      $log.log("hello log!");
      $log.warn("hello warn!");
    }

  }]);
