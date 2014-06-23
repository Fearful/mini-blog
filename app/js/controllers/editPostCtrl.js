app.controller('editPostCtrl', function($scope,$rootScope, $routeParams, $location) {
    //get the element by id

    $scope.current = _.find( $rootScope.posts, function(itemPost){return itemPost.id == $routeParams.postId});

    $scope.updatePost = function() {

        //still same reference not need to update

        $location.path("/posts");

    };
});