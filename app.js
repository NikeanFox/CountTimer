const dateInput = document.querySelector('.date-box');
const submitButton = document.querySelector('.sub-but');
submitButton.clickCount = 0;
submitButton.addEventListener("click", getReqDate);

function getReqDate(event) {
    if (++this.clickCount === 2) {
        location.reload();
    }
    const reqTime = dateInput.value;
    if (reqTime == '') {
        alert("Enter A Date!");
        location.reload();
    }
    const reqTimeDate = new Date(reqTime);
    let currentDate = new Date();
    if (isNaN(reqTimeDate)) {
        alert("Enter The Date Like In Example");
        location.reload();
    }
    if (reqTimeDate < currentDate) {
        alert("Enter A Future Date!");
        location.reload();
    }

    function countdown() {
        currentDate = new Date();
        const heading = document.querySelector('.heading');
        const daysItem = document.getElementById('big-text-day');
        const hoursItem = document.getElementById('big-text-hour');
        const minutesItem = document.getElementById('big-text-minute');
        const secondsItem = document.getElementById('big-text-second');
        const diff = (reqTimeDate - currentDate);

        const totalseconds = diff / 1000;

        const days = Math.floor(totalseconds / 3600 / 24);
        const hours = Math.floor((totalseconds / 3600) % 24);
        const mins = Math.floor((totalseconds / 60) % 60);
        const seconds = Math.floor(totalseconds % 60);

        daysItem.innerHTML = days;
        hoursItem.innerHTML = hours;
        minutesItem.innerHTML = mins;
        secondsItem.innerHTML = seconds;
        heading.innerHTML = "Time Until " + reqTime;
        console.log(currentDate);
    }
    setInterval(countdown, 1000);

}