'use strict';

app.controller('newPostCtrl', function($scope, $rootScope, $location, localStorageService) {
    // Call to blogService.create()

    $scope.addPost = function() {   
        var postData = {
             id : ++$rootScope.cont,
            title : $scope.titlePost,
            text : $scope.bodyPost
        };

        $rootScope.posts.push(postData);
        $location.path("/posts");
        if(localStorageService.isSupported){
            localStorageService.set('posts', $rootScope.posts);
        }
    };
});