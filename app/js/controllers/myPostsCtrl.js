'use strict';

app.controller('myPostsCtrl', function($scope, blogService, toaster, $rootScope) {
    //get all elements
    var singlePost = [{
        id: 1,
        title: 'Post 1',
        text:  'Texto del Post 1.'
    },
        {
            id: 2,
            title: 'Post 2',
            text:  'Texto del Post 2.'
        }
    ];

//    var cont = singlePost.length;

//    $rootScope.data = singlePost;


//    $scope.myPosts = blogService.getAll()
//        .success(function (data, status, headers, config) {
//            $scope.data = data;
//        })
//        .error(function(data, status, headers, config) {
//            toaster.pop('error', current);
//        });
});