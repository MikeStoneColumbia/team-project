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

async function generateQuery(){

	let longitude = document.getElementById("lon").value
	let latitude = document.getElementById("lat").value

	const params = new URLSEARCHPARAMS();
	params.append("Longitude",longitude);
	params.append("Latitude",latitude);

	//TODO: actually implement fetch() to send or retrieve coordinate results

	await fetch('/data',{ 
		method: 'POST',
		body: params
	}).then(response => response.json())
	.then(data => console.log(data)) //server sends lat and lon values to verify success
	

}
