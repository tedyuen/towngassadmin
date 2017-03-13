/**
 * Created by tedyuen on 2017/2/3.
 */
tgApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  // $urlRouterProvider.when('','/main.admin.frontPage').otherwise('/main.admin.frontPage');
  $urlRouterProvider.when('','/main/admin/frontPage').otherwise('/main/admin/frontPage');
  $stateProvider
    .state('login',{//登录页
      url:'/login',
      templateUrl:'template/signin.html',
      controller:'loginController'
    })
    .state('main',{//主页
      url:'/main',
      templateUrl:'template/main.html',
      controller:'mainController'
    })
    .state('main.admin',{
      url:'/admin',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar.html',
          controller: 'adminRoleController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.admin.frontPage',{//首页
      url:'/frontPage',
      views: {
        'content@main': {
          templateUrl: 'template/sidebar/frontPage.html',
          controller: 'frontPageController'
        }
      }
    });


}]);
