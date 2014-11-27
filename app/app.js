var app = angular.module("app", ['ngRoute']);

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


