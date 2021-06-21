// get value of date and time
function getDateTime() {

    let today = new Date('2021-05-13T07:42:29');

    let year = today.getFullYear();
    let month = today.getMonth()+1; 
    let date = today.getDate();
    let amPm = "PM";
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"][today.getDay()];

    if(month < 10 ) {
        month = "0"+month;
    }
    if (date<10){
    date = "0" + date;
    }
    if (hour<12){
        amPm = "AM";
    }
    if (hour>12){
        hour = hour-12;
    }
    if (hour<10){
        hour = "0" + hour;
    }
    if (minute<10){
        minute = "0" + minute;
    }
    if (second<10){
        second = "0" + second;
    }

    const DATEVALUE_OBJ = {
        year: year,
        month: month,
        date: date,
        amPm: amPm,
        hour: hour,
        minute: minute,
        second: second,
        day: day
    };

    return DATEVALUE_OBJ;
}

// display texts on HTML
function displayTexts() {
    const dateValues = getDateTime();

    const date = document.querySelector('.date');
    date.innerHTML = `${dateValues.year} - ${dateValues.month} - ${dateValues.date} ${dateValues.day}`;

    const time = document.querySelector('.time');
    time.innerHTML = `${dateValues.hour} : ${dateValues.minute} : ${dateValues.second} ${dateValues.amPm}`;
}

// Get time every 1 second
function callRealTime(){
    displayTexts();
    window.setInterval(() => {displayTexts()}, 1000);
}

// main
callRealTime();