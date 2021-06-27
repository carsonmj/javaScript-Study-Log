const date = new Date();

const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
];

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];

const showCalendar = () => {
    let dates ='';

    const seletedYear = date.getFullYear();
    const selectedMonth = date.getMonth();

    const firstDayIdx = new Date(seletedYear, selectedMonth, 1).getDay();
    const lastDayIndex = new Date(seletedYear, selectedMonth + 1, 0).getDay();
    const lastDate = new Date(seletedYear, selectedMonth+1, 0);
    const prevLastDate = new Date(seletedYear, selectedMonth, 0);
    
    const monthDates = document.querySelector('.dates');

    for(let i = firstDayIdx; i > 0; i--){
        dates += `<div class="prevDate">${prevLastDate.getDate() - i + 1}</div>`;
    }

    for(let j = 1; j <= lastDate.getDate(); j++ ){
        if( j === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            dates += `<div class="today">${j}</div>`;
        } else {
            dates += `<div>${j}</div>`;
        }
        
    }

    for(let k = 1; k <= 7-lastDayIndex-1; k++){
        dates += `<div class="nextDate">${k}</div>`;
        monthDates.innerHTML = dates;
    }

    document.querySelector('.calendar').id = `${date.getFullYear()} ${date.getMonth()}`;
    document.querySelector('.selectedDay').innerHTML = `${days[date.getDay()]} <br> ${date.getDate()} <br><br> ${months[date.getMonth()]} ${date.getFullYear()}`;

    const dayDivs = document.querySelectorAll('.dates>div');
    console.log(dayDivs);
    dayDivs.forEach( div => {   console.log(div);
        div.addEventListener('click', (e) => { console.log(e); onClickDay(e); })
    });
};



document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    showCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    showCalendar();
});









// document.querySelectorAll('.dates > div').addEventListener('click', (e) => {
//     const yearNmonth = document.querySelector('.calendar').id.split(' ');
//     const date = e.target.textContent;

    
//     console.log('yearNmonth-> ', yearNmonth);
//     console.log('date-> ', date);


//     if(!date || !yearNmonth){
//         return;
//     }


//     const selectedDate = new Date();
//     selectedDate.setFullYear(yearNmonth[0]);
//     selectedDate.setMonth(yearNmonth[1]);
//     selectedDate.setDate(date);

//     document.querySelector('.selectedDay').innerHTML = `${days[selectedDate.getDay()]} <br> ${selectedDate.getDate()} <br><br> ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
// });


function onClickDay(e) {
    const yearNmonth = document.querySelector('.calendar').id.split(' ');
    const date = e.target.textContent;

    
    console.log('yearNmonth-> ', yearNmonth);
    console.log('date-> ', date);


    if(!date || !yearNmonth){
        return;
    }


    const selectedDate = new Date();
    selectedDate.setFullYear(yearNmonth[0]);
    selectedDate.setMonth(yearNmonth[1]);
    selectedDate.setDate(date);

    document.querySelector('.selectedDay').innerHTML = `${days[selectedDate.getDay()]} <br> ${selectedDate.getDate()} <br><br> ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
}

showCalendar();