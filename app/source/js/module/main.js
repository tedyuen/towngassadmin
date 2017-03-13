/**
 * Created by tedyuen on 2017/2/3.
 */
global.$ = global.jQuery = require('jquery');
// var Dropzone = require("dropzone");

require('bootstrap');
// require('metismenu');
// require('jquery-slimscroll');
// require('./utils/JqueryEllipsis');
// require('./utils/jquery.blockUI');
// require('jquery-toast-plugin');
// require('dropify');
// require('jquery-wizard');
// require('magnific-popup');

require('bootstrap-datepicker');
require('./utils/bootstrap-datepicker');
require('sweetalert');

require('angular');
require('angular-cookies');
require('angular-ui-router');
require('angular-messages');
require('angular-ui-bootstrap');


var tgApp = angular.module("myApp",['ui.router','ngCookies','ngMessages','ui.bootstrap']);
// yonglongApp.config(['$compileProvider',function ($compileProvider) {
//   $compileProvider.debugInfoEnabled(false);
// }]);
// var Mock = require('mockjs');
var UiState = require('./utils/UiState');
