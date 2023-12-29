//get the current time
let currentTime = dayjs();

// Set the values to be displayed on the schedule
const hourFrom = 9;
const hourTo = 17;

function displayCurrentDate() {
    const currentDayContainer = $('#currentDay');
    currentDayContainer.text(currentTime.format('dddd, MMMM D'));
}

function createScheduleItem(time, isPast, isCurrent) {
    const scheduleItem = $('<div>').addClass('schedule-item');

    // Left side: Current time
    const currentTime = $('<div>').text(time.format('h:mm A')).addClass('hour');
    scheduleItem.append(currentTime);

    // Middle: Textarea
    const textarea = $('<textarea>').attr('placeholder', 'Type something here...')
        .addClass(isCurrent ? 'present' : (isPast ? 'past' : 'future'));
    scheduleItem.append(textarea);

    // Right side: Save button
    const saveBtnContainer = $('<div>').addClass('saveBtnContainer');
    const saveBtn = $('<button>').addClass('saveBtn').attr('title', 'Save').html('<i class="fa-regular fa-floppy-disk"></i>');

    saveBtnContainer.append(saveBtn);
    scheduleItem.append(saveBtnContainer);

    // Load saved content from local storage if available
    const savedContent = localStorage.getItem(getStorageKey(time));
    if (savedContent) {
        textarea.val(savedContent);
    }

    // Attach an event listener to the Save button to save textarea content
    saveBtn.on('click', function () {
        localStorage.setItem(getStorageKey(time), textarea.val());
    });

    // Append the schedule item to the scheduler container
    $('#container').append(scheduleItem);
}

function getStorageKey(time) {
    // Use a unique key for each time slot based on its formatted string
    return `schedule_${time.format('YYYY-MM-DDTHH:mm:ss')}`;
}

// Get the current time using day.js
currentTime = dayjs();

// Loop through each hour from 9 am to 5 pm and create schedule items
for (let hour = hourFrom; hour <= hourTo; hour++) {
    const time = currentTime.set('hour', hour).set('minute', 0).set('second', 0);

    // Check if the time has already passed
    const isPast = time.isBefore(currentTime);
    const isCurrent = time.isSame(currentTime, 'hour');

    // Create a schedule item
    createScheduleItem(time, isPast, isCurrent);
}

displayCurrentDate();