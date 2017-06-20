"use strict";
console.log("ProfilePageCtrl is working");

app.controller("ProfilePageCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();

  DataFactory.getAllUserEvents(user)
    .then( (events) => {
      $scope.events = events;
      console.log("These are the users events", $scope.events);
    });


  $scope.delBoard = function(boardId) {
    // console.log("boardId", boardId);
    DataFactory.deleteYourBoard(boardId)
      .then(function(){
        $route.reload();
      });
  };

  // $scope.goToEditView = (id) => {
  //     $location.path(`/editBoards/${id}`);
  //   };

});