"use strict";

app.controller('EventsCtrl', function($scope, DataFactory, $location, AuthFactory) {


//  let user = AuthFactory.getUser();
// $scope binds it to dom...if not ask

    DataFactory.getAllEvents()
    .then( (allEvents) => {
    	$scope.allEvents = allEvents;
    	console.log("allEvents", allEvents);
    });


    $scope.getEvent = function ( eventID ) {
    // get specific event
    DataFactory.getEvent( eventID )
    .then( () => {
      $location.path(`/contentDetails/${eventID}`);
    });
  };


    DataFactory.getAllEvents();
});