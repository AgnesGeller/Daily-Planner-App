Agi
agi0909_46157
Online

Agi — Today at 15:22
koszonom
Hajdu — Today at 15:25
Szívesen
Agi — Today at 15:29
Most teszem fel a github ra
talalta egy jo videot gyakorolni a js t es az api kat
ma elkezdem megcsinalni mindet , lehet be is rakom a github ba
megnezned majd nekem a kovetkezo challanget?
Hajdu — Today at 15:31
M
Már csinálom a challanget 😄
Agi — Today at 15:32
👍 🙏 😍
Hajdu — Today at 16:10
Font Awesome-ra kellene regisztrálj
Agi — Today at 16:11
Rendben szerintem fent vagyok pillanat csak csinalok meg egy git push t
Hajdu — Today at 16:11
Oké
Agi — Today at 16:13
nem hallani a hangot probalom hozza adni
Image
Nalam hallani, de ha megnyitom a github bol akkor nem hallani. Megprobalod?
https://agnesgeller.github.io/Code-Quiz/
Hajdu — Today at 16:18
A score.js-t ne hívd meg az index.php-ben, mert hibát dob
Image
Agi — Today at 16:18
ja eleg a 2 ?
Hajdu — Today at 16:19
Igen a score.js a highscore.html-ben kell lennie
Még 1 dolog

A logic.js-ben 167-es sor ott maradt egy consol.log, azt is kiveheted
Image
És a highscore.js-ben csak a score.js-nek kell lennie, a másik 2 js file-t szedd ki
Image
Agi — Today at 16:26
ok
regisztraltam
le is toltottem
valamit
Hajdu — Today at 16:34
a font awesome-n?
Agi — Today at 16:35
igen szerintem
Hajdu — Today at 16:37
https://fontawesome.com/kits
Your Kits | Font Awesome
Get icons in your projects quickly! Kits are the fastest & easiest way to use Font Awesome in your web-based projects (available for desktop, too).
Image
Itt csinálj egy kit-et ha még nincs
Agi — Today at 16:41
igen ez az
Image
Hajdu — Today at 16:42
Kell legyen egy ilyes link
Image
Image
Agi — Today at 16:46
a code alapjan nem jon be
mi a neve?
icon?
Hajdu — Today at 16:51
Link kellene
Az nélkül nem tudom használni az iconokat
Agi — Today at 16:52
de hogy talalom meg?
lepj be az enyembe
az nem jo?
darlingagnes@gmail.com
Agika0909
Hajdu — Today at 16:52
Most a mentésnek "Save" van, nemsokára rakok icon-t ha sikerül
Image
Agi — Today at 16:53
👍  szuper
olyan vagy, mint a villam
Hajdu — Today at 16:53
Volt csinálva kitted
Image
https://fontawesome.com/kits/061ab29d06/setup
Kit | Font Awesome
Get icons in your projects quickly! A Kit is the fastest & easiest way to use Font Awesome in your web-based projects (available for desktop, too).
Image
Agi — Today at 16:54
Az mi?
LAtom igen, de hogy kerult az oda..
JA most mar ertem mi ez
Hajdu — Today at 17:00
Ezzel csak ingyenesen elérhető iconokat lehet használni
Agi — Today at 17:00
oke
Hajdu — Today at 17:06
Elkészült 😄
Agi — Today at 17:08
Tenyleg?
Szuoer
Szuper
Hajdu — Today at 17:10
https://streamable.com/qioon6

Ezt csak azért küldöm, hogy mutassam meg mire van az egyik komponens amit készítek
Streamable
Tooltip-bemutato
Agi — Today at 17:11
Hajdu — Today at 17:12
A használata csak annyi, hogy egy akármilyen tag-be beírod, hogy

<div hn-tooltip="Ide kell beírni, hogy mit jelenítsen meg">Ez egy sima div</div>
Agi — Today at 17:12
Itt minden function kulon van hozza csatolva?
Hajdu — Today at 17:13
Hogy érted?
Agi — Today at 17:13
js
form, colour , button, card ect
Agi — Today at 17:14
Ezt nem ertem
Hajdu — Today at 17:15
Ez úgy működik, hogy a html file-ban meg kell hívni a hn-comps.js-t
Image
Agi — Today at 17:15
oke
Hajdu — Today at 17:16
Úgy oldottam meg, hogy a hn-comps.js file ellenőrzi, hogy volt-e használva egy kulcsszó a könyvtárból, ha volt akkor meghívja azt a komponenst
Image
Agi — Today at 17:17
ertem
Hajdu — Today at 17:17
Ezeket figyeli ha valamelyik használva volt, mint pl. a hn-tooltip attribute, akkor készít egy script-et a head-be
Image
Ezt 2 dolog miatt oldottam meg így, hogy a felhasználónak könnyebb dolga legyen, mert csak 1 file-t meghív, és utána csak használnia kell a komponenseket, a másik ok meg, hogy nem lassítja az oldalt, mert csak azt tölti be amire tényleg szükség van
Szedem ki, visszarakom az alapértelmezett "title"-t, hogy ha ráviszi a felhasználó az egeret mutassa, hogy Save
Agi — Today at 17:23
Oke
Hajdu — Today at 17:35
Attachment file type: archive
starter.rar
2.65 KB
//get the current time
let currentTime = dayjs();

//Set the values to be displayed on the schedule
const hourFrom  = 9;
const hourTo    = 17;
Expand
script.js
3 KB
Ezt a scriptet használd, mert a becsomagolt-ban benne felejtettem azt, hogy az órát beállítottam 10-re, hogy próbáljam ki, hogy pirosan jelenik meg a jelenlegi idő vagy sem
Agi — Today at 17:38
szoval ne a starterttoltsem le
nem ertem
l m
el kell most mennem mert fozom a vacsorat
Hajdu — Today at 17:39
A starter-t töltsd le, de a benne lévő scriptet cseréld ki erre
Még 1 dolog, az elején raktam egy olyant amivel be tudod állítani, hogy mennyit mutasson, jelenleg 
reggel 9-től délután 17 óráig mutassa
Agi — Today at 17:40
Nekem kell bealitanom, vagy igy mehet fel a github ra?
marmint annak kell beallitani aki dolgozik rajta?
Hajdu — Today at 17:41
A demo-ban reggel 9-től délután 5-ig van, és is annyira állítottam be, tehát szerintem jó lesz úgy ahogy van, csak megcsináltam úgy, ha meg kell változtatni
Agi — Today at 17:42
Ja ertem. Jo lesz ahogy van. szerintem megnezi a gep es ha mukodik akkor jo
Agi — Today at 17:52
Third part Api es jQuery t hasznalunk ehhez a Challanghez.. az is van benne?
Hajdu — Today at 17:57
Most raktam bele jQuery-t is, de viszont nem tudom, hogy mit lehetne ehhez a projekthez API-t használni?
Hajdu — Today at 18:06
Ez a jQuery-változat
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
Collapse
script.js
3 KB
Agi — Today at 18:28
Hat nem tudom
Lehet nem is kell
Hajdu — Today at 18:29
Most minden feladatot elvégez amit a feladat kér, API használatának nem látom semmi értelmét ebben a projektben
Agi — Today at 19:37
na itt vagyok
ezt akkor irjam be az index.html-be? A használata csak annyi, hogy egy akármilyen tag-be beírod, hogy

<div hn-tooltip="Ide kell beírni, hogy mit jelenítsen meg">Ez egy sima div</div>
Agi — Today at 20:16
Nekem nem szines
megnezned  mi a gond?
Agi — Today at 20:32
Feltoltom a githubra
﻿
Hajdu
hajdu666
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
script.js
