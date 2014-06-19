'use strict';

app.controller('postDetailsCtrl', function($scope,$rootScope, $routeParams,$location) {
    //Call to getById() method in blogService

    $scope.current = _.find( $rootScope.data, function(itemPost){return itemPost.id == $routeParams.postId});

    // removePost function
    $scope.removePost = function () {

       //todo remove $scope.current from $rootScope.data,

        $location.path("/posts");
    }
});