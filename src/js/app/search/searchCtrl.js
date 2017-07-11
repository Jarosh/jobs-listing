app.controller('SearchCtrl', function(
    $scope,
    $state,
    moment,
    JobsResource
) {

    $scope.preview = [];
    $scope.results = [];
    $scope.filters = {
        page: 1,
        description: null,
        location: null,
        fulltime: null
    };
    $scope.query = {
        description: null,
        location: null,
        fulltime: null
    };
    
    $scope.formatTime = function(datetime) {
        return moment(datetime).format('MMMM DD, YYYY');
    }
    
    $scope.search = function() {
        var query = $scope.query.description || $scope.query.location;
        JobsResource.getJobsList(query).then(
            function(res) {
                $scope.results = res.data;
                $scope.filters.description = $scope.query.description;
                $scope.filters.location = $scope.query.location;
            }
        );
    }

    $scope.isPreviewVisible = function(id) {
        return $scope.preview.indexOf(id) !== -1;
    }
    
    $scope.showJob = function(id) {
        //$state.go('search/show', {id: id});
        if (!$scope.isPreviewVisible(id)) {
            $scope.preview.push(id);
        }
    } 
    
    $scope.hideJob = function(id) {
        var ind = $scope.preview.indexOf(id);
        if (ind !== -1) {
            $scope.preview.splice(ind, 1);
        }
    }

});
