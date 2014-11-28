#angular-gag
### Google Analytics(AngularJs)

Indicates how to use Google Analytics scripts in your AngularJs applications.

If you call initialize script on every page(controllers), 'PageView' count shown multiple on the Google Analytics reports screen. 
**Example**
Firstly page loads "#/firstpage", then clicks "#/secondpage". 
Analytics report shown like this:
"#/firstpage" : viewcount : 1
"#/secondpage" : viewcount : 2 (because it count with firstpage)


Make sure to add the following scripts on the page once.

```javascript
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-xxxxx-x']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
```
and controllers

```javascript
app.controller('firstPageController', ['$scope',
    function ($scope) {
        $scope.$on('$routeChangeSuccess', function () {
            var url = location.pathname + location.search + location.hash;
            _gaq.push(['_trackPageview', url]);
        });

    }]);

app.controller('secondPageController', ['$scope',
    function ($scope) {
        $scope.$on('$routeChangeSuccess', function () {
            var url = location.pathname + location.search + location.hash;
            _gaq.push(['_trackPageview', url]);
        });

    }]);
```