const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://hazzas98.github.io/data.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const packets = request.response;
    populateHeader(packets);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['id'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Longitude: ' + jsonObj['longitude'] + ' // Latitude: ' + jsonObj['latitude'];
    header.appendChild(myPara);
}