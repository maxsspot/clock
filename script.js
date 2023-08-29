setInterval(function() {
var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var day = currentDate.getDay();
var dayText = document.getElementById ("day");

var month = currentDate.getMonth();
var monthText = document.getElementById ("month");

var year = currentDate.getFullYear();
var yearText = document.getElementById ("year");

var time = hours + ":" + minutes + ":" + seconds;
var timeText = document.getElementById ("time");

var dayNumber = currentDate.getDate();
var dayNumberText = document.getElementById("daynumber");

////////////////////
///////////////////

if (seconds < 10) {
    seconds = "0" + seconds;
} else { 

}

if (minutes < 10) {
    minutes = "0" + minutes;
} else {
    
}

///////////////////
// Shows current time 

switch (hours) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        time = hours + ":" + minutes + ":" + seconds + " AM";
        timeText.innerHTML = time;
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        time = hours-12 + ":" + minutes + ":" + seconds + " PM";
        timeText.innerHTML = time;
        break;
}

///////////////////
// Shows day of week 

switch (day) {
    case 1:
        dayText.innerHTML = "Monday,";
        break;
    case 2:
        dayText.innerHTML = "Tuesday,";
        break;
    case 3:
        dayText.innerHTML = "Wednesday,";
        break;
    case 4:
        dayText.innerHTML = "Thursday,";
        break;
    case 5:
        dayText.innerHTML = "Friday,";
        break;
    case 6:
        dayText.innerHTML = "Saturday,";
        break;
    case 7:
        dayText.innerHTML = "Sunday,";
        break;
}

///////////////////
// Shows month

switch (month) {
    case 0:
        monthText.innerHTML = "January";
        break;
    case 1:
        monthText.innerHTML = "February";
        break;
    case 2:
        monthText.innerHTML = "March";
        break;
    case 3:
        monthText.innerHTML = "April";
        break;
    case 4:
        monthText.innerHTML = "May";
        break;
    case 5:
        monthText.innerHTML = "June";
        break;
    case 6:
        monthText.innerHTML = "July";
        break;
    case 7:
        monthText.innerHTML = "August";
        break;
    case 8:
        monthText.innerHTML = "September";
        break;
    case 9:
        monthText.innerHTML = "October";
        break;
    case 10:
        monthText.innerHTML = "November";
        break;
    case 11:
        monthText.innerHTML = "December";
        break;
}

///////////////////

dayNumberText.innerHTML = dayNumber + ",";
yearText.innerHTML = year;

if (hours < 12) {
    document.title = hours + ":" + minutes + ":" + seconds + " AM";
} else {
    document.title = hours-12 + ":" + minutes + ":" + seconds + " PM";
}

///////////////////

var hours2 = currentDate.getHours();
var minutes2 = currentDate.getMinutes();
if (localStorage.getItem("reminder") && hours2 + ":" + minutes2 === document.getElementById ("date").value) {
      var notiTitle = document.getElementById ("title").value;
      var notiText = document.getElementById ("body").value;
      var targetTime = document.getElementById ("date").value;

      function spawnNotification(notiText, notiTitle) {
          const options = {
            title: notiTitle,
            body: notiText
      };
              const n = new Notification(notiTitle, NotiText);
              console.log(n.body);
            }

    localStorage.clear();
}

console.log(hours2+":"+minutes2);

}, 1);



///////////////////

function openUI () {
    document.getElementById ("ui").style.top = "10px";
    document.getElementById ("ui").style.opacity = "1";
    document.getElementById ("ui").style.pointerEvents = "all";
}

function closeUI () {
    document.getElementById ("ui").style.top = "0px";
    document.getElementById ("ui").style.opacity = "0";
    document.getElementById ("ui").style.pointerEvents = "none";
}

function deleteSavedStuff () {
        localStorage.clear();
}

function createTimer () {
  Notification.requestPermission();
    
  if (Notification.permission === "granted") {
    localStorage.setItem ("reminder","true");
    alert ("Notification set. You will get a notification with the title and text you provided at the time you provided.");
  } else if (Notification.permission === "denied") {
    alert ("The permission to send notifications was denied or your browser do not support notifications.");
  }
}
