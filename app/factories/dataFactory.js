"use strict";
/*
app.factory("DataFactory", function($q, $http, FBCreds) {

	const getAllEvents = (eventsID) => {
		let allEvents = [];
		console.log("this is running", `${FBCreds.databaseURL}/events.json?orderBy="uid"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/events.json?orderBy="uid"`)
			.then((eventsObjs) => {
				let eventsCollection = eventsObjs.data;
				Object.keys(eventsCollection).forEach((key) => {
					eventsCollection[key].id = key;
					allEvents.push(eventsCollection[key]);
				});
				resolve(allEvents);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getAllEvents};
});
*/


app.factory("DataFactory", function ($q, $http, FBCreds) {

      	console.log(`${FBCreds.databaseURL}/events.json`);
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


/*
const getAllUserEvents = (eventID) => {
		let userEvents = [];
		console.log(`${FBCreds.databaseURL}/users.json?orderBy="boardId"&equalTo="${boardID}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/users.json?orderBy="boardId"&equalTo="${boardID}"`)
			.then((pinObjs) => {
				let pinCollection = pinObjs.data;
				Object.keys(pinCollection).forEach((key) => {
					pinCollection[key].id = key;
					userEvents.push(pinCollection[key]);
				});
				resolve(pins);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
*/

  return {getAllEvents, getEvent, addEvent};
});