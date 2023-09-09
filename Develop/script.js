//-- Current Date & Time
const date = dayjs();
const dateAndTime = date.format('MMMM D, YYYY h:mm A');
console.log(dateAndTime);
$('#current-day').html(dateAndTime);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        let text = $(this).siblings('description').val(JSON.stringify);
        let time = $(this).parent().attr('id');
        localStorage.setItem(time, text);


        // let textInput = $('description');
        // let textValue = textInput.val();

        // localStorage.setItem('text', textValue);
    })

    let currentTime = new Date().getHours();
    $('.time-block').each(function () {
        let hour = parseInt($(this).find('.hour').text());
        let description = $(this).find('description');
        let saveBtn = $(this).find('.savebtn');
        if (hour < currentTime) {
            $(this).addClass('past');
        } else if (hour === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })






    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    $('#hour9 .description').val(localStorage.getItem('hour9'));

});

