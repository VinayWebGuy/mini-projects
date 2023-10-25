let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>=12 ? 'PM' : 'AM';

    if(h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = am

    hr.style.transform = `rotate(${h * 30}deg)`
    min.style.transform = `rotate(${m * 6}deg)`
    sec.style.transform = `rotate(${s * 6}deg)`
})

function enterFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}
document.addEventListener('click', () => {
    enterFullscreen();
});