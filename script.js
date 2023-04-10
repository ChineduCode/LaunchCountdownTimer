const daysInnerText = document.querySelector('.days-innertext')
const hoursInnerText = document.querySelector('.hours-innertext')
const minutesInnerText = document.querySelector('.minutes-innertext')
const secondsInnerText = document.querySelector('.seconds-innertext')

// Set the target date
const targetDate = new Date('2023-12-31T23:59:59');

// Update the countdown every second
const countdownInterval = setInterval(() => {
    // Calculate the remaining time
    const now = new Date().getTime();
    const remainingTime = targetDate.getTime() - now;

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the remaining time on the screen
    daysInnerText.innerText =  days
    hoursInnerText.innerText = hours
    minutesInnerText.innerText = minutes
    secondsInnerText.innerText = seconds
    
    // Add leading zero once any of the countdown is less than 10
    if(seconds < 10){
        secondsInnerText.innerText = '0' + seconds
    }

    if(minutes < 10){
        minutesInnerText.innerText = '0' + minutes
    }

    if(hours < 10){
        hoursInnerText.innerText = '0' + hours
    }

    if(days < 10){
        daysInnerText.innerText = '0' + days
    }
    
    //clear interval once the remaining time is less than 0
    if (remainingTime < 0) {
        clearInterval(countdownInterval);

        daysInnerText.innerText =  '00'
        hoursInnerText.innerText = '00'
        minutesInnerText.innerText = '00'
        secondsInnerText.innerText = '00'
    }

}, 1000);