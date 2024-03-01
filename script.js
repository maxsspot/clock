var loadedFont = localStorage.getItem ("loadFont");
var loadedBackground = localStorage.getItem ("backgroundColor");
var loadedColor = localStorage.getItem ("clockColor");

document.addEventListener("DOMContentLoaded", function () {
    var clockElement = document.getElementById("clock");

    if (loadedFont == "Nunito Sans") {
        
        document.getElementById("clock").style.fontFamily = "Nunito Sans";
        document.getElementById("fontChoice").value="Nunito Sans";
        
    } else if (loadedFont == "Poppins") {
        
        document.getElementById("clock").style.fontFamily = "Poppins";
        document.getElementById("fontChoice").value="Poppins";
        
    } else if (loadedFont == "DM Sans") {
        
        document.getElementById("clock").style.fontFamily = "DM Sans";
        document.getElementById("fontChoice").value="DM Sans";
        
    } else if (loadedFont == "Montserrat") {
        
        document.getElementById("clock").style.fontFamily = "Montserrat";
        document.getElementById("fontChoice").value="Montserrat";
        
    } else if (loadedFont == "Nunito Sans") {
        
        document.getElementById("clock").style.fontFamily = "Nunito Sans";
        document.getElementById("fontChoice").value="Nunito Sans";
        
    } else if (loadedFont == "Inconsolata") {
        
        document.getElementById("clock").style.fontFamily = "Inconsolata";
        document.getElementById("fontChoice").value="Inconsolata";
        
    } else if (loadedFont == "Roboto") {
        
        document.getElementById("clock").style.fontFamily = "Roboto";
        document.getElementById("fontChoice").value="Roboto";
        
    } else if (loadedFont == "Hind") {
        
        document.getElementById("clock").style.fontFamily = "Hind";
        document.getElementById("fontChoice").value="Hind";
        
    } else if (loadedFont == "PT Sans") {
        
        document.getElementById("clock").style.fontFamily = "PT Sans";
        document.getElementById("fontChoice").value="PT Sans";
        
    } else if (loadedFont == "Archivo") {
        
        document.getElementById("clock").style.fontFamily = "Archivo";
        document.getElementById("fontChoice").value="Archivo";
        
    } else if (loadedFont == "Jost") {
        
        document.getElementById("clock").style.fontFamily = "Jost";
        document.getElementById("fontChoice").value="Jost";
        
    } else {
        
        document.getElementById("clock").style.fontFamily = "Nunito Sans";
        document.getElementById("fontChoice").value="Nunito Sans";
        
    }

    //////////

    document.body.style.backgroundColor = loadedBackground;
    document.getElementById ("backgroundColor").value = loadedBackground;

    document.getElementById ("clock").style.color = loadedColor;
    document.getElementById ("textColor").value = loadedColor;

    /////////
});

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

if (hours < 1) {
    hours = "0" + hours;
} else {

}

///////////////////
// Shows current time 

switch (hours) {
    case 0:
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
        time = hours + ":" + minutes + ":" + seconds + " PM";
        timeText.innerHTML = time;
        break;
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
} else if (hours == 12) {
    document.title = hours + ":" + minutes + ":" + seconds + " PM";
} else {
    document.title = hours-12 + ":" + minutes + ":" + seconds + " PM";
}

///////////////////

if (window.innerWidth <= 768) {
  document.getElementById ("section2").style.fontSize = "29px";
  document.getElementById ("styles").style.scale = "0.8";
  var isMobile = true;
} else {
  document.getElementById ("section2").style.fontSize = "35px";
  document.getElementById ("styles").style.scale = "1.0";
  var isMobile = false;
}

//////////////////

}, 1);

///////////////////
function changeFont () {
    var fontChoice = document.getElementById("fontChoice");
    var selected = fontChoice.value;
    
    if (selected == "Poppins") {
        
        document.getElementById("clock").style.fontFamily = "'Poppins', sans-serif";
        localStorage.setItem ("loadFont","Poppins");
        
    } else if (selected == "DM Sans") {
        
        document.getElementById("clock").style.fontFamily = "'DM Sans', sans-serif";
        localStorage.setItem ("loadFont","DM Sans");
        
    } else if (selected == "Montserrat") {
        
        document.getElementById("clock").style.fontFamily = "'Montserrat', sans-serif";
        localStorage.setItem ("loadFont","Montserrat");
        
    } else if (selected == "Nunito Sans") {
        
        document.getElementById("clock").style.fontFamily = "'Nunito Sans', sans-serif";
        localStorage.setItem ("loadFont","Nunito Sans");
        
    } else if (selected == "Inconsolata") {
        
        document.getElementById("clock").style.fontFamily = "'Inconsolata', sans-serif";
        localStorage.setItem ("loadFont","Inconsolata");
        
    } else if (selected == "Roboto") {
        
        document.getElementById("clock").style.fontFamily = "'Roboto', sans-serif";
        localStorage.setItem ("loadFont","Roboto");
        
    } else if (selected == "Hind") {
        
        document.getElementById("clock").style.fontFamily = "'Hind', sans-serif";
        localStorage.setItem ("loadFont","Hind");
        
    } else if (selected == "PT Sans") {
        
        document.getElementById("clock").style.fontFamily = "'PT Sans', sans-serif";
        localStorage.setItem ("loadFont","PT Sans");
        
    } else if (selected == "Archivo") {
        
        document.getElementById("clock").style.fontFamily = "'Archivo', sans-serif";
        localStorage.setItem ("loadFont","Archivo");
        
    } else if (selected == "Jost") {
        
        document.getElementById("clock").style.fontFamily = "'Jost', sans-serif";
        localStorage.setItem ("loadFont","Jost");
        
    }
}

//////////////////

function changeBg () {
    document.body.style.backgroundColor = document.getElementById("backgroundColor").value;
    localStorage.setItem ("backgroundColor",document.getElementById("backgroundColor").value);
}

function changeTxt () {
    document.getElementById ("clock").style.color = document.getElementById ("textColor").value;
    localStorage.setItem ("clockColor",document.getElementById("textColor").value);
}

function custombg () {
    var custom = prompt('Please insert the URL of your image.');

    if (custom != null) {
        document.body.style.background = "url('custom')";
        document.body.style.backgroundRepeat = "none";
        document.body.style.backgroundSize = "cover";
    }
}

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
