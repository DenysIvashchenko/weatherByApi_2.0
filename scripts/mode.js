const switchMode = document.querySelector('.button img');
console.log(switchMode)

switchMode.onclick = () => {
    let img = document.querySelector('.button img');
    let theme = document.getElementById('theme');
    let video = document.querySelector('video');

    if (theme.getAttribute("href") == "./css/style.css") {
        theme.href = "./css/light.css";
        img.src = "./video/iconSun.png"
        video.src = "./video/Sunrise.mp4"
    }
    else {
        theme.href = "./css/style.css";
        img.src = "./video/iconMoon.png"
        video.src = "./video/Sunset.mp4"
    }
}