# Google Analytics(AngularJs)

The following script should load once:


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
and every controller(page with "#")

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