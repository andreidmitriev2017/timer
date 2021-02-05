function createTimer(deadline, timerId, hoursInput, minutesInput, secondsInput) {
    function getTimeRemaining(deadline) {
        let t = Date.parse(deadline) - Date.now();

        let timeObj = {
            total: t,
            hours: "00",
            minutes: "00",
            seconds: "00",
        }

        if (t <=0 ) return timeObj;

        timeObj.seconds = Math.floor((t / 1000) % 60);
        timeObj.minutes = Math.floor((t / 1000 / 60) % 60);
        timeObj.hours = Math.floor( (t / (1000 * 60 * 60)) );

        if (timeObj.seconds < 10) timeObj.seconds = "0" + timeObj.seconds;
        if (timeObj.minutes < 10) timeObj.minutes = "0" + timeObj.minutes;
        if (timeObj.hours < 10) timeObj.hours = "0" + timeObj.hours;

        return timeObj;
    }

    function updateTimer() {
        let timeObj = getTimeRemaining(deadline);

        hours.textContent = timeObj.hours;
        minutes.textContent = timeObj.minutes;
        seconds.textContent = timeObj.seconds;

        if (timeObj.total <= 0) clearInterval(timerInterval);
    }

    let timer = document.getElementById(timerId),
        hours = timer.querySelector(hoursInput),
        minutes = timer.querySelector(minutesInput),
        seconds = timer.querySelector(secondsInput);

    let timerInterval = setInterval(updateTimer, 1000);
    
}