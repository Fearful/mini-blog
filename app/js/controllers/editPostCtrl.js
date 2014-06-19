app.controller('editPostCtrl', function($scope, $routeParams, blogService, $location, toaster) {
    //get the element by id

    cosole.log("hello from editPostCtrl");

    var post = _.find( $rootScope.data, function(itemPost){return itemPost.id == $routeParams.id});

   $scope.current =  post;
//    res.send(selPost);
//       blogService.getById($routeParams.postId)
//        .success(function (current, status, headers, config) {
//            $scope.current = current;
//         })
//        .error(function(current, status, headers, config) {
//            toaster.pop('error', current);
//         });

    // update post information. Call to blogService.update()
//    $scope.updatePost = function() {
//        blogService.update($scope.current.id, $scope.current)
//            .success(function (current, status, headers, config) {
//                $location.path("/posts/"+$scope.current.id);
//                toaster.pop('success', "Post updated successfully!");
//             })
//            .error(function(current, status, headers, config) {
//                toaster.pop('error', current);
//             });
//    };
});