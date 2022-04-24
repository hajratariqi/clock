var min = 0;
var sec = 0;
var msec = 0;
var minHd = document.getElementById("min");
var secHd = document.getElementById("sec");
var msecHd = document.getElementById("msec");
var interval;

function timer() {
  msec++;
  msecHd.innerHTML = msec;
  if (msec >= 100) {
    msec = 0;
    sec++;
    secHd.innerHTML = sec;
  } else if (sec >= 60) {
    sec = 0;
    min++;
    minHd.innerHTML = min;
  } else if (min >= 61) {
    min = 0;
    minHd.innerHTML = min;
  }
}

function clock() {
  var but = document.getElementById("clock");
  if (but.innerHTML == "Start") {
    interval = setInterval(timer, 10);
    but.innerHTML = "Pause";
  } else {
    clearInterval(interval);
    but.innerHTML = "Start";
  }
}

function reset() {
  clearInterval(interval);
  min = 0;
  sec = 0;
  msec = 0;
  minHd.innerHTML = min;
  secHd.innerHTML = sec;
  msecHd.innerHTML = msec;
  document.getElementById("clock").innerHTML = "Start";
}
