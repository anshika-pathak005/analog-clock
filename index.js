const numberHours = document.querySelector(".number_hours");
const barSeconds = document.querySelector(".bar_second");

const numberElement = [];
const barElement = [];

//creation of number hours

for(let i=1 ; i<=12 ;i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin",numberElement.join(""));
// console.log(numberElement)


//creating bar elements

for(let i=0;i<=60;i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""));

//move teh hands of the clock

const handHours = document.querySelector(".hand.hours")
const handMinutes = document.querySelector(".hand.minutes")
const handSeconds = document.querySelector(".hand.seconds")

function getCurrentTime(){

    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    /*

    60 seconds = 360deg so 1 sec = 360/60 = 6deg
    60 minutes = 360deg so 1 min = 360/60 = 6deg
    12 hours = 360 deg so 1 hour = 360/12 = 30deg

    1hrs = 30deg that means 60 min = 30deg so 1 min = 30/60 = 0.5deg or 1/2deg

    so formula for hours if (hours * 30 * minutes/2)

     */

    handHours.style.transform = `rotate(${handHours * currentMinutes/2}deg)`;

    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;

    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

}

//calling the function
getCurrentTime();

//have to call the function every second
setInterval(getCurrentTime,1000);

