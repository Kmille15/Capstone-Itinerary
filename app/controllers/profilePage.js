"use strict";
console.log("ProfilePageCtrl is working");

app.controller("ProfilePageCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {


  let isAuth = AuthFactory.isAuthenticated();
  let user = AuthFactory.getUser();

 let information = function(){
  DataFactory.getAllUserEvents(AuthFactory.getUser())
    .then( (events) => {
      $scope.events = events;
      console.log("These are the users events", $scope.events);
    });
};

      console.log("user test2", user);
  $scope.delEvent = function(eventID) {
     console.log("eventID", eventID);
    DataFactory.deleteYourEvent(eventID)
      .then(function(){
        $route.reload();
      });
  };

  // $scope.goToEditView = (id) => {
  //     $location.path(`/editBoards/${id}`);
  //   };
  information();

});