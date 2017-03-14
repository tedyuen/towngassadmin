/**
 * Created by tedyuen on 13/03/2017.
 */
var myApp = angular.module('myApp', [

]);

myApp.controller('createCeaController',['$scope','$timeout',function ($scope,$timeout) {

  // swal('awef','awf','error');
  $scope.params= {
    ceacode:'',
    position:'',
    proname:'',
    developers:'',
    starttime:'',
    endtime:'',
    applydepart:'',

    feea:0,
    feeb:0,
    feec:0,
    feed:0,
    feee:0,
    feef:0,
    feeg:0,
    feeh:0,
    feei:0,
    feej:0,
    feek:0,
    feel:0,
    feem:1,
    feen:0,
    feeo:0,
    remark1:'',
    remark2:'',
    applyer:'',
    date1:'',
    date2:'',
    record:'',
    opinion:'',

  }

  $scope.submit = function () {
    swal({
      title: "确定提交申请吗?",
      text: "您即将提交新的资本性支出申请!",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "取消",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "是的,提交!",
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      animation: "slide-from-top",
    }, function(){
      $timeout(function () {
        swal({
          title:"提交成功！",
          text:"已成功提交申请。",
          type:"success",
          confirmButtonText:"确定",
        },function () {
          $timeout(function () {
            $scope.reset();
          },20);
        });
      },1000);
    });
  }

  $scope.reset = function () {
    var params= {
      ceacode:'',
      position:'',
      proname:'',
      developers:'',
      starttime:'',
      endtime:'',
      applydepart:'',

      feea:0,
      feeb:0,
      feec:0,
      feed:0,
      feee:0,
      feef:0,
      feeg:0,
      feeh:0,
      feei:0,
      feej:0,
      feek:0,
      feel:0,
      feem:1,
      feen:0,
      feeo:0,
      remark1:'',
      remark2:'',
      applyer:'',
      date1:'',
      date2:'',
      record:'',
      opinion:'',

    }

    $scope.params = params;
  }



  $scope.cal = function () {
    $scope.params.feee = $scope.params.feea+$scope.params.feeb+$scope.params.feec+$scope.params.feed;
    $scope.params.feek = $scope.params.feef+$scope.params.feeg+$scope.params.feeh+$scope.params.feei+$scope.params.feej;
    $scope.params.feel = $scope.params.feek+$scope.params.feee;
    $scope.params.feen = $scope.params.feem-$scope.params.feel;
    try{
      $scope.params.feeo = $scope.params.feen/$scope.params.feem;
    }catch (e){

    }
  }

}]);
