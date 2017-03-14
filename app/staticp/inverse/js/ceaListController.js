/**
 * Created by tedyuen on 13/03/2017.
 */
var tgApp = angular.module('myApp', [

]);

tgApp.controller('ceaListController',['$scope',function ($scope) {

  $scope.test = "hello world";


  var data = [
    {ceaCode:'Aeb3W2EweA',proType:'市政管网改造',proName:'测试项目1',startTime:'2017-3-27',state:'临时',feen:'34,209',feeo:'15%',up:true},
    {ceaCode:'Iejfi23hjI',proType:'农村管网改造',proName:'测试项目2',startTime:'2017-4-1',state:'临时',feen:'6,329',feeo:'10%',up:true},
    {ceaCode:'KJei2eIpaE',proType:'接水工程',proName:'测试项目3',startTime:'2017-3-18',state:'临时',feen:'54,653',feeo:'5%',up:false},
    {ceaCode:'Bjei3Keoa9',proType:'市政新增管网',proName:'测试项目4',startTime:'2017-5-11',state:'生效',feen:'34,312',feeo:'25%',up:false},
    {ceaCode:'IeuwEJ3eWA',proType:'接水工程',proName:'测试项目5',startTime:'2017-4-5',state:'临时',feen:'13,209',feeo:'7%',up:true},
    {ceaCode:'NBSije13Id',proType:'乡镇管网改造',proName:'测试项目6',startTime:'2017-3-30',state:'临时',feen:'32,223',feeo:'6%',up:true},
    {ceaCode:'C23i1jwSoJ',proType:'市政管网改造',proName:'测试项目7',startTime:'2017-4-15',state:'生效',feen:'7,743',feeo:'9%',up:false},
    {ceaCode:'Nbjei1eidD',proType:'一表一户改造',proName:'测试项目8',startTime:'2017-4-27',state:'临时',feen:'7,124',feeo:'11%',up:true},
    {ceaCode:'Qkei33Ew1D',proType:'二次供水',proName:'测试项目9',startTime:'2017-5-9',state:'临时',feen:'4,339',feeo:'21%',up:true},
    {ceaCode:'Reji2Wef1E',proType:'小区给水安装',proName:'测试项目10',startTime:'2017-4-17',state:'生效',feen:'30,288',feeo:'19%',up:false},
    {ceaCode:'E38eD1WACv',proType:'乡镇新增管网',proName:'测试项目11',startTime:'2017-6-1',state:'临时',feen:'12,456',feeo:'22%',up:true},
  ];

  $scope.list = data;

  $scope.query = function (index) {
    switch(index){
      case 0:
        $scope.list = data;
        break;
      case 1:
        var tempIndex = [true,false,true,false,true,false,true,false,true,false,true];
        var tempArr = [];
        for(var index in data){
          var temp = data[index];
          if(tempIndex[index]){
            tempArr.push(temp);
          }
        }
        $scope.list = tempArr;
        break;
      case 2:
        var tempIndex = [true,false,true,false,true,false,false,true,true,false,false];
        var tempArr = [];
        for(var index in data){
          var temp = data[index];
          if(tempIndex[index]){
            tempArr.push(temp);
          }
        }
        $scope.list = tempArr;
        break;
      case 3:
        var tempIndex = [false,true,false,false,false,true,false,false,true,true,true];
        var tempArr = [];
        for(var index in data){
          var temp = data[index];
          if(tempIndex[index]){
            tempArr.push(temp);
          }
        }
        $scope.list = tempArr;
        break;

    }
  }


}]);
