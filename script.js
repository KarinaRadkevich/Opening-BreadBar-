function openCountdown() {
    const openDate = new Date("August 20, 2024 08:00");
    const now = new Date();
    const diff = openDate-now;
    
    const msInSecond = 1000;
    const msInMinute = 60* 1000;
    const msInHour = 60* 60* 1000;
    const msInDay = 24* 60* 60* 1000;
    
    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;
    
    const displayHour = Math.floor((diff % msInDay)/ msInHour);
    document.querySelector(".hours").textContent = displayHour;
    
    const displayMinute = Math.floor((diff % msInHour)/ msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;
    
    const displaySeconds = Math.floor((diff % msInMinute)/ msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;
    
    
    if (diff <= 0) {
        document.querySelector(".days").textContent =0;
        document.querySelector(".hours").textContent =0;
        document.querySelector(".minutes").textContent =0;
        document.querySelector(".seconds").textContent =0;
        clearInterval(timerID);
        open();
    }
    }
    
    let timerID= setInterval(openCountdown, 1000);
    
    
    function open() {
        const heading = document.querySelector("h1");
        heading.textContent= "Bakery ''BreadBar'' open!!!";
        heading.classList.add("new");
        const head = document.querySelector("#head");
        head.textContent = "We open!!!";
        head.classList.add("new");
    }


const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]

let i = 0;

next.addEventListener("click",() => {
    i++;
    if (i> photos.length-1) {
        i=0;
    }
    document.querySelector("#pictures").src = photos[i];
})

back.addEventListener("click",() => {
    i--;
    if (i<0) {
        i= photos.length-1;
    }
    document.querySelector("#pictures").src = photos[i];
})


