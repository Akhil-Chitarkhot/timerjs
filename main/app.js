const minutesDis = document.getElementById("minutes")
const secondsDis = document.getElementById("seconds")



let minutes = 0
let seconds = 0 
let countdownInt; 

function updateCounter() {

    seconds++;

    if (seconds == 60) {
        minutes++;
        seconds =0
    }

    secondsDis.style.setProperty("--value" , seconds)
    minutesDis.style.setProperty("--value" , minutes)
}


function startTimer() {

    if (!countdownInt) { 
        countdownInt = setInterval(updateCounter, 1000);
    }
}

function stopTimer() {

    clearInterval(countdownInt) 
    countdownInt = null
}

function restartTimer() {
    stopTimer()
    minutes = 0
    seconds = 0
    updateCounter()
    startTimer()

}



