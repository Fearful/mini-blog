'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [ 'ngRoute', 'toaster', 'msLocalStorage' ]);

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

app.run(function ($rootScope, localStorageService) {
    $rootScope.posts = [];
    if(localStorageService.isSupported){
        localStorageService.setPrefix('ms');
        var savedPosts = localStorageService.get('posts');
        $rootScope.posts = savedPosts ? savedPosts : [];
    }
    $rootScope.cont = $rootScope.posts.length;
});