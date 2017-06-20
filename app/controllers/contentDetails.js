"use strict";

app.controller('ContentDetailsCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams) {



  console.log("$rP.eventID", $routeParams.eventID);
    let eventID = $routeParams.eventID;

    DataFactory.getEvent(eventID)
    .then( (items) => {
      $scope.item = items;
      console.log("this is the new data", $scope.item);
    });
  let isAuth = AuthFactory.isAuthenticated();
  let user = AuthFactory.getUser();

  $scope.eventId = $routeParams.eventID;

/*
    DataFactory.getEvent($routeParams.eventID, $scope.obj)
    .then((data) => {
        console.log('youre adding an event to user', data);
        $scope.obj = data;
        $scope.obj.id = $routeParams.eventID;
    });
*/
  $scope.submit = function () {
    // stuff goes here

    $scope.item.uid= user;
    console.log("This is what the user is supposed to be",user);
    console.log("$scope.obj", $scope.item);
    DataFactory.addEvent($scope.item);
  };


});



