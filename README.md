* [1. 指令服务及帮助类使用](#directive)
  * [1.1 日期控件](#datePicker)
  * [1.2 文件上传控件](#dropify)
  * [1.3 ajax请求及接口服务](#httpServer)
  * [1.4 loading插件](#loading)
  * [1.5 alert控件](#alert)
  * [1.6 toast控件](#toast)
  * [1.7 ellipsis插件](#ellipsis)
  * [1.8 mock数据模拟](#mock)
  * [1.9 分页指令pagination](#pagination)
  * [1.10 等比例img(4:3)显示控件](#proportionimage)
  * [1.11 表单验证指令](#validate)
  * [1.12 上传多图](#dropzone)
* [2. 编码规范](#rule)
  * [2.1 文件目录结构](#dirpath)
  * [2.2 Log](#log)
  * [2.3 基本字符串转化过滤器](#basetextfilter)
* [3. 文字过滤器](#filter)
* [4. 自定义表单验证指令](#ownvalidate)
  * [4.1 2次密码是否一致](#valsamepass)
* [5. 插件配置](#interfaceConfig)




<h2 id="directive">1. 指令服务及帮助类使用</h2>

<h3 id="datePicker">1.1 日期控件</h3>

* 注入 <code>showDatePickerProvider</code>
* html标签内存在mydatepicker的class，如下:
```html
<div class="form-group">
        <div class="input-group">
            <span class="input-group-addon">装箱日期</span>
            <input type="text" class="form-control mydatepicker" placeholder="yyyy-mm-dd" ng-model="queryData.shippingDate">
            <span class="input-group-addon"><i class="icon-calender"></i></span>
        </div>
</div>
```

* 在controller第一行添加以下代码:
```javascript
showDatePickerProvider.showDatePicker();
```

<h3 id="dropify">1.2 文件上传控件</h3>

* 注入 <code>dropifyProvider</code>
* html标签如下:
```html
<div class="form-group">
      <label for="id1">身份证(正面)</label>
      <input type="file" id="id1" class="dropify" data-allowed-file-extensions="jpg png jpeg" data-max-file-size="2M" data-default-file="{{reg.nameCard}}" ng-files-model="regfile1.file"/>
</div>
```

* controller中调用:
```javascript
dropifyProvider.dropify();
```

* 如果存在在线原始图片，即有data-default-file属性，则需要在获取在线图片路径后(ajax请求成功后)再调用 <code>dropify()</code> 方法,如下:
```javascript
$timeout(function () {
        dropifyProvider.dropify();
},10);
```

* <code>$scope</code> 获取文件时，使用如下方式(多个文件也适用):
```javascript
$scope.regfile1 = {
        name: 'nameCardFile',
        file: '',
};
var files = [$scope.regfile1];
```


<h3 id="httpServer">1.3 ajax请求服务</h3>

* 具体例子请参考frontpage。
* <code>serverAddress.js</code> 中添加method。
```javascript
// 测试接口 method
sendcode: 'sendcode'
```

* <code>interfaceService.js</code> 中添加interface方法。
```javascript
// 测试接口
this.sendcode = function (params,success,error) {
        URL_CONS.doHttpMethod(serverAddress.sendcode,params,success,error);
}
```

* controller中注入 <code>interfaceService</code>，调用接口，添加 <code>success</code> 的回调方法。
```javascript
$scope.httpTest = function () {
        var params = {
            codetype: 0,
            mobilePhone: '18616990040'
        };
        interfaceService.sendcode(params, function(data, headers, config) {
            console.log(JSON.stringify(data));
            $scope.result = data;
        });
}
```

<h3 id="loading">1.4 loading插件</h3>

* 注入 <code>loadingService</code>
* 调用方法，参数 <code>str</code> 为loading中显示的文字,并在需要结束的地方关闭。如:
```javascript
loadingService.showLoading("请稍后...");
loadingService.closeLoading();
```

* 在调用ajax接口前如需要loading，则无需注入 <code>loadingService</code> ，可以直接调用 <code>interfaceService</code> 的 <code>showLoading(str)</code> 方法，并且无需关闭loading。如:
```javascript
interfaceService.showLoading("请稍后...");
```

<h3 id="alert">1.5 alert控件</h3>

* 使用[SweetAlert](http://t4t5.github.io/sweetalert/)插件。具体使用方法请参考官方文档。例子如下:


<h3 id="toast">1.6 toast控件</h3>

* 注入 <code>toastService</code>
* 提供了2个类型的toast，<code>success</code> <code>warning</code>。使用方法如下:
```javascript
toastService.toastSuccess({
        heading: '发送成功',
        text: '验证码发送成功,请查看您的短信收件箱，输入有效验证码，并完成表单。',
});
toastService.toastWarning({
        heading: '发送失败',
        text: '验证码发送失败,请查看您的网络设置并重试。',
});
```

* 如需要自定义，可以在 <code>toastService.js</code> 中自行添加样式。


<h3 id="ellipsis">1.7 ellipsis插件</h3>

* 如若需要将返回的文字进行缩略，需要在ajax返回后调用，如下:
```javascript
$timeout(function () {
        $('.news-note').ellipsis({
            row:2
        });
        $('.news-title').ellipsis({
            row:1
        });
},20);
```

* 使用[jQuery Ellipsis](https://github.com/STAR-ZERO/jquery-ellipsis),具体方法参考官方文档。


<h3 id="mock">1.8 mock数据模拟</h3>

* 使用[mock.js](http://mockjs.com/)
* <code>main.js</code> 中打开以下代码:
```javascript
var Mock = require('mockjs');
```

* 在 <code>module/test</code> 中创建自己的mock文件，并在 <code>gulpfile.js</code> 中的jsArr数组中添加路径。

<h3 id="pagination">1.9 分页指令pagination</h3>

* html页面调用:
```html
<table></table>
<pagination total-pages="results.totalPages"
            curr-page="results.currPageNum"
            switch-page="switchPage"
            show-count="100">
</pagination>
```

* <code>total-pages</code> 注入总共有几页
* <code>curr-page</code> 注入当前页码
* <code>switch-page</code> 注入切换页码的方法名，在 <code>controller</code> 中实现方法，如下:
```javascript
// 分页
$scope.switchPage = function (page) {
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
}
```

* <code>show-count</code> 注入需要展示几页(ps:这个功能现在是假的)

<h3 id="proportionimage">1.10 等比例img(4:3)显示控件</h3>

* html页面调用:
```html
<pro-img ng-src="images/login-register.jpg"></pro-img>
```

* <code>ng-src</code> 图片src。
* 此控件用于珊格系统定宽的地方，宽高比为3:4，图片从宽高比例较短的一边自适应，并裁剪。


<h3 id="validate">1.11 表单验证指令</h3>

* 一般使用
```html
<div class="col-md-6 col-lg-4 col-sm-12">
        <div class="form-group" ng-class="{'has-error':theForm.username.$invalid}">
            <div class="input-group">
                <span class="input-group-addon">用户姓名</span>
                <input type="text" class="form-control" name="username" required ng-minlength="3" ng-maxlength="10" ng-model="orderDetail.username" placeholder="输入大于3位小于10位的字符" >
            </div>
            <div class="help-block with-errors" ng-if="theForm.username.$valid">
                <span>&nbsp;</span>
            </div>
            <div class="help-block with-errors" ng-messages="theForm.username.$error">
                <span ng-message="minlength">用户名最小长度3</span>
                <span ng-message="maxlength">用户名最大长度10</span>
                <span ng-message="required">用户名必填</span>
            </div>
        </div>
</div>
```

* 套用message模版使用
```html
<div class="col-md-6 col-lg-4 col-sm-12">
        <div class="form-group" ng-class="{'has-error':!theForm.email.$valid}">
            <div class="input-group">
                <span class="input-group-addon">邮箱</span>
                <input type="email" class="form-control" name="email" required ng-model="orderDetail.email" placeholder="邮箱" >
            </div>
            <div class="help-block with-errors" ng-if="theForm.email.$valid">
                <span>&nbsp;</span>
            </div>
            <div class="help-block with-errors" ng-messages="theForm.email.$error">
                <div ng-messages-include="template/directive/valid/valEmail.html"></div>
            </div>
        </div>
</div>
```

* 自定义指令使用
```html
<div class="col-md-6 col-lg-6 col-sm-12">
        <div class="form-group" ng-class="{'has-error':theForm.password.$invalid}">
          <div class="input-group">
            <span class="input-group-addon">密码</span>
            <input type="password" class="form-control" name="password" required ng-model="orderDetail.password" placeholder="密码">
          </div>
          <div class="help-block with-errors" ng-if="theForm.password.$valid">
            <span>&nbsp;</span>
          </div>
          <div class="help-block with-errors" ng-messages="theForm.password.$error">
            <p ng-message="required">密码不能为空</p>
          </div>
        </div>
</div>
<div class="col-md-6 col-lg-6 col-sm-12">
        <div class="form-group" ng-class="{'has-error':theForm.repassword.$invalid}">
          <div class="input-group">
            <span class="input-group-addon">重复密码</span>
            <input type="password" class="form-control" name="repassword" ng-model="orderDetail.repassword" required val-s-p="orderDetail.password" placeholder="重复密码">
          </div>
          <div class="help-block with-errors" ng-if="theForm.repassword.$valid">
            <span>&nbsp;</span>
          </div>
          <div class="help-block with-errors" ng-messages="theForm.repassword.$error">
            <div ng-messages-include="template/directive/valid/valSamePass.html"></div>
      
          </div>
        </div>
</div>
```

<h3 id="dropzone">1.12 上传多图</h3>

* 页面上使用:
```html
<dropzone file-arr="fileArr1" center-text="添加报价单文件">
</dropzone>
```

* `controller` 中调用:
```javascript
// 图片数组
$scope.fileArr1=[];
//图片请求接口
$scope.uploadImg = function () {
				interfaceService.showLoading('正在上传...');
				var fileParameter = {source: "web", token: "token"};
				interfaceService.upload(fileParameter, $scope.fileArr1, function (data, headers, config) {
						if(data.code === rescode.SUCCESS){
								$log.debug('图片请求'+JSON.stringify(data));
						}else {
								swal("失败!","图片请求接口失败!","error");
						}
				});
};
```

* `file-arr` : 页面中接受的文件数组
* `center-text` : 控件中的默认文字，可以空。



<h2 id="rule">2. 编码规范</h2>

<h3 id="dirpath">2.1 文件目录结构</h3>

* `.editorconfig` ide配置文件
* `.gitignore` 版控忽略配置
* `config.js` js编译配置
* `gulpfile.js` gulp配置文件
* `package.json` npm配置文件
* `README.md` git仓库readme
* `app`
   * `out` 发布项目目录
      * `css` 
      * `fonts`
      * `icons`
      * `imgages`
      * `js`
      * `rev` 静态资源版本控制
      * `template` 静态html模版
         * `crm` crm模块
         * `directive` 指令模版
         * `invoicing` 进销存模块
      * `shell.html` 测试开发入口
      * `index.html` 生产入口
   * `source` 开发目录
      * `css`
      * `fonts`
      * `js`
         * `module` angularjs内容
            * `app` 各种配置
            * `controller`
            * `directive` 自定义指令
            * `filter` 过滤器
            * `service` 所有service factory provider
            * `test` mockjs测试内容
            * `utils` 各种工具 
            * `main.js` js入口
         * `pixel` 静态模版内容
      * `less` 静态模版less文件
      * `sass` 开发css预编译
         * `css` 开发sass导出的css文件

     


<h3 id="log">2.2 Log</h3>

* 在需要log的 `controller` 注入 `$log`
* 调用:
```javascript
$scope.testLog = function () {
        $log.debug("hello debug!");
        $log.error("hello error!");
        $log.info("hello info!");
        $log.log("hello log!");
        $log.warn("hello warn!");
}
```

* 注意语义化调用。测试中请使用 `$log.debug()` 来打印日志，有关闭功能。


<h3 id="basetextfilter">2.3 基本字符串转化过滤器</h3>

* 根据自己的需要在 `js/filter/baseTextFilter.js` 中定义自己的文字过滤器
* eg: 需要将服务器返回的数字加上货币单位。 response.money = 2 --> 2元
* 在 `js/filter/baseTextFilter.js` 内定义:
```javascript
lvdiApp.filter('moneyText',function () {
        return function (str) {
            return str+"元";
        }
})
```

* 在 `html` 页面中使用 `{{response.money | moneyText }}`
* 使用范围: 一起服务器返回的原数据，需要格式化的文字，都必须写在 `js/filter/baseTextFilter.js` 文件中或者在 `js/filter/` 文件夹中自定义一个过滤器，并在下一个条目 [3. 文字过滤器](#filter) 中添加文档，以便复用。


<h2 id="filter">3. 文字过滤器</h2>


<h2 id="ownvalidate">4. 自定义表单验证指令</h2>

<h3 id="valsamepass">4.1 2次密码是否一致</h3>

* 具体使用方法如下
```html
<div class="col-md-6 col-lg-6 col-sm-12">
        <div class="form-group" ng-class="{'has-error':theForm.password.$invalid}">
          <div class="input-group">
            <span class="input-group-addon">密码</span>
            <input type="password" class="form-control" name="password" required ng-model="orderDetail.password" placeholder="密码">
          </div>
          <div class="help-block with-errors" ng-if="theForm.password.$valid">
            <span>&nbsp;</span>
          </div>
          <div class="help-block with-errors" ng-messages="theForm.password.$error">
            <p ng-message="required">密码不能为空</p>
          </div>
        </div>
</div>
<div class="col-md-6 col-lg-6 col-sm-12">
        <div class="form-group" ng-class="{'has-error':theForm.repassword.$invalid}">
          <div class="input-group">
            <span class="input-group-addon">重复密码</span>
            <input type="password" class="form-control" name="repassword" ng-model="orderDetail.repassword" required val-s-p="orderDetail.password" placeholder="重复密码">
          </div>
          <div class="help-block with-errors" ng-if="theForm.repassword.$valid">
            <span>&nbsp;</span>
          </div>
          <div class="help-block with-errors" ng-messages="theForm.repassword.$error">
            <div ng-messages-include="template/directive/valid/valSamePass.html"></div>
      
          </div>
        </div>
</div>
```

* 在表单控件上使用属性指令 `val-s-p`
* 传入需要比对的控件 `ng-model` 的参数名字
* 可以在 `ng-messages` 中使用 `samepass` 为显示名字。
* 也可以导入 `template/directive/valid/valSamePass.html` 模版

<h2 id="interfaceConfig">5. 插件配置</h2>

1. 初始化npm
```bash
npm init
```

2. 添加.editorconfig文件
3. 添加.gitattributes文件
4. 添加.gitignore文件
5. 安装构建插件
```bash
// gulp
// gulp-browserify
// del
// gulp-clean-css
// gulp-concat
// gulp-obfuscate
// gulp-rename
// gulp-sass
// gulp-uglify
// gulp-babel babel-preset-es2015
sudo npm install --save-dev gulp gulp-browserify del gulp-clean-css gulp-concat gulp-obfuscate gulp-rename gulp-sass gulp-uglify gulp-babel babel-preset-es2015 gulp-rev gulp-rev-collector gulp-sync
```

6. 安装项目插件
```bash
// angular
// jquery 
// bootstrap 
// angular-route
// angular-ui-router
// angular-animate
// bootstrap-datepicker
// jquery-toast-plugin
// metismenu
// jquery-slimscroll
// angular-baidu-map
// dropify
// mockjs
// sweetalert
// angular-cookies
// waypoints
// angular-ui-bootstrap
// jquery-wizard
// dropzone
// magnific-popup
sudo npm install --save angular jquery bootstrap angular-route angular-ui-router angular-animate bootstrap-datepicker jquery-toast-plugin metismenu jquery-slimscroll angular-baidu-map dropify mockjs sweetalert angular-cookies waypoints angular-ui-bootstrap jquery-wizard dropzone magnific-popup
```

7. npm 设置淘宝镜像
```bash
npm config set registry http://registry.npm.taobao.org
```






