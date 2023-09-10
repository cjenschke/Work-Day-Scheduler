//-- Current Date & Time
const date = dayjs();
const dateAndTime = date.format('MMMM D, YYYY h:mm A');
console.log(dateAndTime);
$('#current-day').html(dateAndTime);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    const storedText = localStorage.getItem('myData')




    $('.time-block').each(function () {
        const scheduleHour = $(this).attr('id').split('hour-')[1];
        const currentHour = new Date().getHours();
        console.log(scheduleHour, currentHour);

        if (scheduleHour < currentHour) {
            $(this).addClass('past');
        } else if (scheduleHour > currentHour) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }
    })

    $('.saveBtn').on('click', function () {
        const text = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');

        localStorage.setItem(time, text);

        const storedData = localStorage.getItem('hour-9');
        const parsedData = JSON.parse(storedData);

        if (parsedData) {
            document.getElementById('#hour-9').value = parsedData.hour9;
        }


    })
    // const storedData = localStorage.getItem('workDayPlannerData')
    // const workDayPlannerData = JSON.parse(storedData);

    // $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
    // $('#hour-10 textarea').val(localStorage.getItem('hour-10'));



});
