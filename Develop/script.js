const date = dayjs();
const dateAndTime = date.format('MMMM D, YYYY h:mm A');
console.log(dateAndTime);
$('#current-day').html(dateAndTime);

$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        const text = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })


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


})


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));



// for (var i = 9; i < 20; i++) {
//     $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));


