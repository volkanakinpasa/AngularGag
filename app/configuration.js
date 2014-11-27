app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo:"/firstpage"
        })
        .when("/firstpage", {
            controller: "firstPageController",
            templateUrl : "first.html"
        })
        .when("/secondpage", {
            controller: "secondPageController",
            templateUrl : "second.html"
        })
        .otherwise({
            redirectTo:"/firstpage"
        });
}]);