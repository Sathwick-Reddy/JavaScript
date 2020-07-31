setInterval(getTime, 1000)

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds()/60;
    const minutes = (seconds + now.getMinutes())/60;
    const hours = (minutes + now.getHours())/12;

    document.querySelector('.second-hand').style.transform = "translateX(50%) rotate(" + seconds*360 + "deg)";
    document.querySelector('.minute-hand').style.transform = "translateX(50%) rotate(" + minutes*360 + "deg)";
    document.querySelector('.hour-hand').style.transform = "translateX(50%) rotate(" + hours*360 + "deg)";
}

getTime();