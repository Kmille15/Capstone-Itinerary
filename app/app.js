"use strict";
var app = angular.module("ItineraryApp", ["ngRoute"]);


let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});


app.config(function ($routeProvider) {
  $routeProvider.
//  when('/', {
//    templateUrl: 'partials/greetings.html'
//  }).
  when('/', {
    templateUrl: 'partials/events.html',
    controller: "EventsCtrl"
  }).
  when('/contentDetails/:eventID', {
    templateUrl: 'partials/contentDetails.html',
    controller: 'ContentDetailsCtrl'/*
    resolve: {isAuth}*/
  }).
  when('/login', {
    templateUrl: 'partials/auth.html',
    controller: 'AuthCtrl'/*
    resolve: {isAuth}*/
  }).
  when('/UserProfile', {
    templateUrl: 'partials/profilePage.html',
    controller: 'ProfilePageCtrl'/*
    resolve: {isAuth}*/
  }).
  otherwise('/');
});

/*
app.config(function($routeProvider){
	$routeProvider.
		when('/events',{
      templateUrl: 'partials/events.html',
      controller: 'EventsCtrl',
      resolve: {isAuth}
      }).
    when('/items/list',{
			templateUrl: 'partials/item-list.html',
			controller: 'ItemListCtrl',
      resolve: {isAuth}
    	}).
    	when('/items/new', {
      		templateUrl: 'partials/item-new.html',
      		controller: 'ItemNewCtrl',
          resolve: {isAuth}
    	}).
    	when('/items/:itemId', {
      		templateUrl: 'partials/item-details.html',
      		controller: "ItemViewCtrl",
          resolve: {isAuth}
    	}).
      when('/items/:itemId/edit', {
          templateUrl: 'partials/item-new.html',
          controller: "ItemEditCtrl",
          resolve: {isAuth}
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: "LoginCtrl"
      }).
      when('/logout', {
        templateUrl: 'partials/login.html',
        controller: "LoginCtrl"
      }).
    	otherwise('/');
});
*/
app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
  };

  firebase.initializeApp(authConfig);
});