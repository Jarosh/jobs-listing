app.config(function(
    $stateProvider,
    $urlRouterProvider
) {
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: '/tpl/app/search/search.html',
            controller: 'SearchCtrl'
        });

    $urlRouterProvider.otherwise('search');
});
