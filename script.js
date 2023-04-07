const daysInnerText = document.querySelector('.days-innertext')
const hoursInnerText = document.querySelector('.hours-innertext')
const minutesInnerText = document.querySelector('.minutes-innertext')
const secondsInnerText = document.querySelector('.seconds-innertext')

let seconds = 60
let minutes = 59
let hours = 23
let days = 14


function daysCount(){

    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }
    if(minutes < 0){
        minutes = 59;
        hours--;
    }
    if(hours < 0){
        hours = 23
        days--
    }

    daysInnerText.innerText =  days
    hoursInnerText.innerText = hours
    minutesInnerText.innerText = minutes
    secondsInnerText.innerText = seconds

    if(seconds < 10){
        secondsInnerText.innerText = '0' + seconds
    }

    if(minutes < 10){
        minutesInnerText.innerText = '0' + minutes
    }

    if(hours < 10){
        hoursInnerText.innerText = '0' + hours
    }
}

window.setInterval(daysCount, 1000)