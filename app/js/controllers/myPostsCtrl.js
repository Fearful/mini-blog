'use strict';

app.controller('myPostsCtrl', function($scope, blogService, toaster) {
    //get all elements
    $scope.myPosts = blogService.getAll()
        .success(function (data, status, headers, config) {
            $scope.data = data;
        })
        .error(function(data, status, headers, config) {
            toaster.pop('error', current);
        });
});