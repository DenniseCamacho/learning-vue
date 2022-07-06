// import {somethings} from "./keys.js";
"use strict";
$(document).ready(function () {

// https://api.esv.org/v3/passage/text/?q=John+11:35


	let doDisplay = document.getElementById('doDisplay');
	doDisplay.append(`sdsdfs`);


	//
	// fetch('https://bible-references.p.rapidapi.com/api/passages/%7Bbible%7D', options)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err));


		let baseUrl = 'https://api.scripture.api.bible';
		// let endPoint = '/v3/passage//html/?q='
	// let endPoint = '/v1/bibles'

	let endPoint = '/v1/bibles'
	const options = {
		method: 'GET',
		apikey: BIBLE_API_TOKEN
	};

	fetch(baseUrl + endPoint, options)
			.then(function (res) {
				return res.json();
// 			// to get all the data from the request, comment out the following three lines...
			}).then(function (data) {
				// console.log(data);
				console.log(data);
	}).catch(function (jqXhr, status, error) {

			});



	// fetch(`https://api.esv.org/v3/passage/text/?q=`, {
	// 		Authorization: BIBLE_API_TOKEN,
	// })
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 			throw new Error('Network response was not ok');
	// 		}
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 	})
	// 	.catch((error) => {
	// 		console.error('There has been a problem with your fetch operation:', error);
	// 	});

	// function fetchMeThenLog(url) {
	//
	// 	fetch(url).then(function (response) {
	// 		return response.json();
	// 	}).then(function (data) {
	// 		// console.log(data.results);
	// 		// console.log(data.results[0].name);
	// 		// console.log(data.results[0].url);
	// 		// showData.doShowData(data.results);
	// 		console.log(data);
	// 	}).catch(function (jqXhr, status, error) {
	// 		console.log(jqXhr);
	// 		console.log(status);
	// 		console.log(error);
	// 	});
	// }

	// searchBible(BIBLE_API_TOKEN);

    // $.ajax({
    //     url: urll,
    //     type: "GET",
    //     authentication: BIBLE_API_TOKEN,
    //     data: {
    //         limit:  10,
    //         offset: 20
    //     }
    // }).done(function(data) {
    //     // do something with the data
    //     console.log(data);
    // });

    // function geocode(search, token) {
// 	let baseUrl = 'https://api.mapbox.com';
// 	let endPoint = '/geocoding/v5/mapbox.places/';
// 	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
// 		.then(function(res) {
// 			return res.json();
// 			// to get all the data from the request, comment out the following three lines...
// 		}).then(function(data) {
//
// 			return data.features[0].center;
//
// 			// return console.log(data.features[0].center);
// 			// let theCoordinates = data.features[0].center;
// 			// theCoordinates.forEach((item, index, array)=>{
// 			// 	// console.log(index);
// 			// 	console.log(item.toFixed(3));
// 			// });
//
// 			// function doAddNewCoordinates(){
// 			// 	//take the coordinates of the weather map,
// 			// 	// place them in map, }
//
// 		});
// }




});
