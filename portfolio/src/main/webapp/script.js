// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.

*/

const KEY = "&key=AIzaSyAAHC0kzUB8IDwJlG0DaP2lLyc_haNkNWs"
const URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="

async function generateQuery(){

	let longitude = document.getElementById("lon").value
	let latitude = document.getElementById("lat").value
    let geoCodeRequest = URL + latitude + "," + longitude + KEY;
    console.log(geoCodeRequest)

	const params = new URLSearchParams();

	//TODO: actually implement fetch() to send or retrieve coordinate results


	await fetch(`/data?latitude=${latitude}&longitude=${longitude}`)
    .then(response => response.text())
    .then(data => console.log(data))



}
