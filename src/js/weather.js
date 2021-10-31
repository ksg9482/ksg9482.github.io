function onGeoOk(posotion){
    const lat = posotion.coords.latitude;
    const lon = posotion.coords.longitude;
    const apiKey = '3f7f7158a55703076ce1c6335f6c6511';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
        const geoName = document.querySelector('#geo_container div:first-child');
        const geoWeather = document.querySelector('#geo_container div:last-child');
        const name = data.name;
        const weather = data.weather[0].main;
        geoName.textContent = name
        geoWeather.textContent = weather
    });
};
function OnGeoErr(){
    alert("err")
};

navigator.geolocation.getCurrentPosition(onGeoOk, OnGeoErr);