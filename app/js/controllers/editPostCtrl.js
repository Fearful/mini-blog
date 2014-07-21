app.controller('editPostCtrl', function($scope, $rootScope, $routeParams, $location, localStorageService) {
    //get the element by id
    $scope.current = _.find( $rootScope.posts, function(itemPost){return itemPost.id == $routeParams.postId});

    $scope.oldTiltle = $scope.current.title;
    $scope.oldText = $scope.current.text;
    $scope.updatePost = function() {
        //still same reference not need to update
        localStorageService.set('posts', $rootScope.posts);
        $location.path("/posts");
    };

    $scope.oldPost = function(){
        $scope.current.title = $scope.oldTiltle;
        $scope.current.text = $scope.oldText
    }
});