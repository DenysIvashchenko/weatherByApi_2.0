function getWether() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?q=${cityId}&units=metric&appid=${param.appid}`)
        .then(res => res.json())
        .then(showWeather)
}
// ============= showWeather on page ==================
function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
}
// ================ conwert from unix time
function showWeather(data) {
    console.log(data);
    nameCity.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHTML = data.main.temp_max;
    time.innerHTML = timeConverter(data.sys.sunrise);

    console.log(new Date(data.sys.sunrise * 1000).toString());
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