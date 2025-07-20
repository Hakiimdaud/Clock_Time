
const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const AmPm = document.querySelector("#AmPm");

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


function clock_Time() {
    const dateTime = new Date();
    //    Hours
    dateTime.getHours() % 12 < 10 ? hour.innerHTML = `0${dateTime.getHours() % 12} :`
        : hour.innerHTML = dateTime.getHours() % 12 + " :";
    // Minutes
    dateTime.getMinutes() < 10 ? minutes.innerHTML = `0${dateTime.getMinutes()} :`
        : minutes.innerHTML = dateTime.getMinutes() + " :";
    // Seconds
    dateTime.getSeconds() < 10 ? seconds.innerHTML = `0${dateTime.getSeconds()}`
        : seconds.innerHTML = dateTime.getSeconds();
    // AmOrPam
    dateTime.getHours() > 12 ? AmPm.innerHTML = "PM" : AmPm.innerHTML = "AM"

}


setInterval(clock_Time);
