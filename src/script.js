const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'http://floodmonitoring.epizy.com/data.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const packets = request.response;
    populateHeader(packets);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h2');
    myH1.textContent = 'ID number: ' + jsonObj['id'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Latitude: ' + jsonObj['latitude']  + ', Longitude: ' + jsonObj['longitude'];
    header.appendChild(myPara);
}