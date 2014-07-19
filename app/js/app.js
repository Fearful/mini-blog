'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [ 'ngRoute', 'toaster' ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider    
        .when('/', 
            {
            controller: 'myPostsCtrl',
            templateUrl: 'partials/myPosts.html' 
            })
        .when('/posts',
            {
            controller: 'myPostsCtrl',
            templateUrl: 'partials/myPosts.html' 
            })
        .when('/addpost',
            {
            controller: 'newPostCtrl',
            templateUrl: 'partials/newPost.html' })
        .when('/toaster',
            {
            controller: 'toasterCtrl',
            templateUrl: 'partials/toaster.html' })
    
        .when('/posts/:postId', 
            {
            controller: 'postDetailsCtrl',
            templateUrl: 'partials/postDetails.html'
            })    
        .when('/edit/:postId', 
            {
            controller: 'editPostCtrl',
            templateUrl: 'partials/editPost.html'
            })    
        .otherwise({redirectTo: '/'});

}]);

app.run(function ($rootScope) {
    $rootScope.posts = [];
    if(supportsStorage()){
        var savedPosts = JSON.parse(localStorage.getItem('mini-blog-posts'));
        if(savedPosts && savedPosts.length > 0){
            $rootScope.posts = $rootScope.posts.concat(savedPosts);
        }
        $rootScope.storage = true;
    } else {
        $rootScope.storage = false;
    }
    $rootScope.cont = $rootScope.posts.length;
});

function supportsStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}