"use strict";

app.controller('NavBarCtrl', function($scope, AuthFactory, $window, $location){
	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged( function(user){
		if (user) {
			$scope.isLoggedIn = true;
			console.log("currentUser logged in", user, $scope.isLoggedIn);
			AuthFactory.isAuthenticated();
			$scope.$apply();
		}else{
			$scope.isLoggedIn = false;
			console.log("currentUser logged in", $scope.isLoggedIn);
			$location.path("/login");
		}
	});

	//add SearchTermData once everything works
	// $scope.searchText = SearchTermData;

});