function getWether() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?q=${cityId}&units=metric&appid=${param.appid}`)
        .then(res => res.json())
        .then(showWeather)
}
// ============= convert from unix time ==================
function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let sec = a.getSeconds();
    let min = a.getMinutes();
    let time = `${date} ${month} ${year}`;
    return time;
}
// ================  showWeather on page  ============
function showWeather(data) {
    console.log(data);
    nameCity.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHTML = data.main.temp_max;
    feels_like.innerHTML = data.main.feels_like;
    time.innerHTML = timeConverter(data.dt);
    icon.innerHTML = `<img src ="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    humidity.innerHTML = data.main.humidity;
    description.innerHTML = data.weather[0].description;
    visibility.innerHTML = data.visibility / 1000;
    pressure.innerHTML = data.main.pressure;
    speed.innerHTML = data.wind.speed;
}
// ======== creating select with option ======
const option = document.createElement('select');
option.setAttribute('id', 'city');

for (let i = 0; i < cities.length; i++) {
    for (let key in cities[i]) {
        option.innerHTML += `<option value="${key}">${cities[i][key]}</option>`
    }
}
document.querySelector('.citys').append(option);
// ---------------------------------------------
document.querySelector('#city').addEventListener('change', getWether);
getWether();