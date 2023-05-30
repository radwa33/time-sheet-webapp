var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;
var milliseconds = 0 ;

     function startTime(current_time) {
   const date1 = new Date(current_time);
  document.getElementById("date").innerHTML = date1.toLocaleTimeString();
  date1.setSeconds(date1.getSeconds()+1)
  setTimeout(function() {startTime(date1.toString())}, 1000);

}
    var startpause=function(){
    backattime();
    millisecInt = setInterval(function(){
        milliseconds = ( milliseconds > 1000 ) ? 1 : ( milliseconds + 1 ) ;
        setTimeToHTML(hours, minutes, seconds, milliseconds);
    },1);
    secondsInt = setInterval(function() {
        seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
    },1000);
    minutesInt = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hoursInt = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);

    document.getElementById("start").disabled = true;

}
    var setcurrent=function(){
     var p = document.createElement("p")
     const date1 = new Date();
     var ptext = document.createTextNode(date1.toLocaleTimeString());
     p.appendChild(ptext);
     var start= document.getElementById("startt");
     start.appendChild(p);
    }
  var setendtime=function(){
   var p = document.createElement("p")
     const date1 = new Date();
     var ptext = document.createTextNode(date1.toLocaleTimeString());
     p.appendChild(ptext);
     var start= document.getElementById("endd");
     start.appendChild(p);
    }
    var startTimer = function() {
    setcurrent();
    millisecInt = setInterval(function(){
        milliseconds = ( milliseconds > 1000 ) ? 1 : ( milliseconds + 1 ) ;
        setTimeToHTML(hours, minutes, seconds, milliseconds);
    },1);
    secondsInt = setInterval(function() {
        seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
    },1000);
    minutesInt = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hoursInt = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);
    document.getElementById("start").disabled = true;

}

var stopTimer = function() {
    stopedattime();
    clearInterval(millisecInt); clearInterval(secondsInt); clearInterval(minutesInt); clearInterval(hoursInt);
    document.getElementById("start").disabled = true;
}

var resetTimer = function() {
    setendtime();
    settotal();
    clearInterval(millisecInt); clearInterval(secondsInt); clearInterval(minutesInt); clearInterval(hoursInt);
    setTimeToHTML(hours, minutes, seconds, milliseconds);
    document.getElementById("start").disabled = true;
}
var setTimeToHTML = function(hours, minutes, seconds) {
    document.getElementById("hours").innerText = (hours.toString().length == 1) ? ("0" + hours):hours ;
    document.getElementById("minutes").innerText = (minutes.toString().length == 1) ? ("0" + minutes):minutes ;
    document.getElementById("seconds").innerText = (seconds.toString().length == 1) ? ("0" + seconds):seconds ;
}

var settotal = function() {
    var p = document.createElement("p") ;
    var timer = document.getElementById("hours").innerText + ":" + document.getElementById("minutes").innerText + ":" + document.getElementById("seconds").innerText ;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var end = document.getElementById("pause");
    pause.appendChild(p);
}
var backattime=function(){
     var p = document.createElement("p")
     const date1 = new Date();
     var ptext = document.createTextNode(date1.toLocaleTimeString());
     p.appendChild(ptext);
     var back= document.getElementById("back");
     back.appendChild(p);
    }
var stopedattime=function(){
     var p = document.createElement("p")
     const date1 = new Date();
     var ptext = document.createTextNode(date1.toLocaleTimeString());
     p.appendChild(ptext);
     var stop = document.getElementById("laps");
     laps.appendChild(p);
    }