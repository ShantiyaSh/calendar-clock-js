const sec = document.querySelector(".--sec");
const min = document.querySelector(".--min");
const hour = document.querySelector(".--hour");
const day = document.querySelector(".--day");
const month = document.querySelector(".--month");
const year = document.querySelector(".--year");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  const now = new Date();
  sec.innerHTML = now.getSeconds();
  min.innerHTML = now.getMinutes();
  hour.innerHTML = now.getHours();
  day.innerHTML = now.getDay();
  month.innerHTML = monthNames[now.getMonth()];
  year.innerHTML = now.getFullYear();
}, 1000);

window.onload = () => {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.6944&longitude=51.4215&current_weather=true"
  )
    .then((response) => response.json())
    .then((json) => {
      const temperature = Math.floor(json.current_weather.temperature);
      temp.innerHTML = temperature + "°C";
      if (json.current_weather.isday) {
        icon.setAttribute("src", "img/day.svg");
        icon.setAttribute("alt", "day");
      } else {
        icon.setAttribute("src", "img/night.svg");
        icon.setAttribute("alt", "night");
      }
    });
};
