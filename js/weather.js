const API_KEY = "e8352b929be22942dc63f8eb83c9c6a6"
const weatherText = document.querySelector("#weahter");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const cityName = data.name;
        const weather = data.weather[0].main;
        weatherText.innerText = `${weather}, ${cityName}`
    });
}

function onGeoError() {
    alert("NO!!!!!");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
