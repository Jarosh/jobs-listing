app.directive('dirOnEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function(evt) {
            if(evt.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.dirOnEnter);
                });
                evt.preventDefault();
            }
        });
    };
});
