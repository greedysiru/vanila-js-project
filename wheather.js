const weather = document.querySelector(".js-weather");
const API_KEY = "ee5bad41203f8ef162df7e6c27505bd7";
const COORDS = 'coords';

//JS는 웹사이트로 request를 보내고 응답을 통해서 데이터를 얻을 수 있다. 새로고침없이 데이터를 가져올 수 있다.

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
        });
}
// API를 제공하는 쪽에서 사용자가 어떤 데이터를 얼마나 가져가는지 알 수 있다.
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}
// 위도와 경도를 가져오는 함수
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude // 객체의 key의 이름을 같게 저장할 때는 : 뒤를 생략해도 된다.
    };
    saveCoords(coordsObj);
    getWeather(latitued, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); // 좌표 가져왔을때 처리하는 함수 ,
}
// api 사용 
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();