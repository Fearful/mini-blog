'use strict';

app.controller('newPostCtrl', function($scope, blogService, $location, toaster, $rootScope) {
    // Call to blogService.create()


    $scope.addPost = function() {
   
        var postData = {
             id : ++$rootScope.cont,
            title : $scope.titlePost,
            text : $scope.bodyPost
        };

        $rootScope.data.push(postData);

        $location.path("/posts");

//        var postData = {
//
//        };
//        blogService.create(postData)
//            .success(function (current, status, headers, config) {
//                debugger;
//                $location.path("/posts");
//                toaster.pop('success', "Post saved successfully!");
//            })
//            .error(function(current, status, headers, config) {
//                toaster.pop('error', current);
//            });
    };
});