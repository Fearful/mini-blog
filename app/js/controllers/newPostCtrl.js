'use strict';

app.controller('newPostCtrl', function($scope, $rootScope) {
    // Call to blogService.create()


    $scope.addPost = function() {
   
        var postData = {
             id : ++$rootScope.cont,
            title : $scope.titlePost,
            text : $scope.bodyPost
        };

        $rootScope.data.push(postData);

        $location.path("/posts");

    };
});