const weather = document.querySelector('.js-weather');

const API_KEY = 'd9d697bee9fbc39437a361b4d7318d4a';
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then( function(response){          //fetch를 통해 가져온 정보 로드가 끝나면 다음 함수를 실행해줘!
    // console.log(response.json());     // pending 로드중
    return response.json();
  })
  .then(function(json){
    console.log(json)
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature}℃ ${place}`
  });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(){
  console.log('Cant access geo location');
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function askForCoords(){
  // navigator api
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if( loadedCoords == null){
    askForCoords(); // 좌표요청
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init() {
  loadCoords();
}

init();