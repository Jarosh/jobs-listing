app.factory('JobsResource', function(
    $http,
    config
) {
    return {

        getJobsList: function(search) {
            // please, note, no pagination data is being returned along with this endpoint
            // hence nothing to show as page numbers
            return $http.get(config.host.api + '/jobs/positions.json' + (search ? '?search='+search : ''));
        }
        
    };
});
