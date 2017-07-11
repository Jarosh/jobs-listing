window.app = angular.module('AppUI', [
    'ui.router',
    'angularMoment'
]);


app.controller('AppUICtrl', function(
) {

});


angular.module('AppUI').run(function($window, $injector) {
    $window.$a = $injector.get;
});
