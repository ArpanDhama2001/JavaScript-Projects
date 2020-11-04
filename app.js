let time = () => {
  let dateObj = new Date();
  let hrs = dateObj.getHours();
  let mins = dateObj.getMinutes();
  let sec = dateObj.getSeconds();
  let ms = dateObj.getMilliseconds() % 100;

  let hour = hrs;
  let indicator = "AM";

  if (hrs > 12) {
    hour = hrs - 12;
  }

  if (hrs >= 12) {
    indicator = "PM";
  }

  let dateStr = dateObj.toString();
  let day = dateStr.slice(0, 3);
  let month = dateStr.slice(4, 7);
  let date = dateStr.slice(8, 10);

  document.getElementById("hrs").firstChild.textContent = hour;
  document.getElementById("mins").firstChild.textContent = mins;
  document.getElementById("sec").firstChild.textContent = sec;
  document.getElementById("indi").firstChild.textContent = indicator;

  document.getElementById("hrs").childNodes[1].innerText = day;
  document.getElementById("mins").childNodes[1].innerText = month;
  document.getElementById("sec").childNodes[1].innerText = date;
};

setInterval(time, 1000);
