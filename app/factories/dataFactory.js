"use strict";

app.factory("DataFactory", function ($q, $http, FBCreds) {


  //console.log(`${FBCreds.databaseURL}/events.json`);
  let getAllEvents= ()=>{
    let items = [];
    return $q((resolve, reject)=>{
      $http.get(`${FBCreds.databaseURL}/events.json`)
      .then((itemObject)=>{
        let itemCollection = itemObject.data;
        console.log("itemCollection object", Object.keys(itemCollection));
        Object.keys(itemCollection).forEach(function(key){

        	 itemCollection[key].id = key;
         	 items.push(itemCollection[key]);

         });
        // resolve(items);
        resolve(itemCollection);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };


  	const getEvent = (eventID) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/events/${eventID}.json`)
			.then((eventObj) => {
				eventObj.data.id= eventID;
				resolve(eventObj.data);
				console.log(eventObj.data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	const addEvent = (eventObj) => {
		console.log("addEvent is running");
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/users.json`, eventObj)
			.then ((eventID) => {
				resolve(eventID);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	const getAllUserEvents = (user) => {
		let userEvents = [];
		//console.log("user test", user);
		//console.log(`${FBCreds.databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`)
			.then((userEventsObj) => {
				let userEventsCollection = userEventsObj.data;
				console.log("testing", userEventsObj);
				Object.keys(userEventsCollection).forEach((key) => {
					userEventsCollection[key].id = key;
					userEvents.push(userEventsCollection[key]);
				});
				resolve(userEvents);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	const deleteYourEvent = (eventID) => {
		return $q ( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/users/${eventID}.json`)
			.then( (response) => {
				resolve(response);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

  return {getAllEvents, getEvent, addEvent, getAllUserEvents, deleteYourEvent};
});