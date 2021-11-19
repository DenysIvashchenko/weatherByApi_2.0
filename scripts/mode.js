const switchMode = document.querySelector('.button img');

switchMode.onclick = () => {
    let img = document.querySelector('.button img');
    let theme = document.getElementById('theme');
    let video = document.querySelector('video');

    if (theme.getAttribute("href") == "./css/dark.css") {
        theme.href = "./css/light.css";
        img.src = "./video/iconSun.png"
        video.src = "./video/Sunrise.mp4"
    }
    else {
        theme.href = "./css/dark.css";
        img.src = "./video/iconMoon.png"
        video.src = "./video/Sunset.mp4"
    }
}