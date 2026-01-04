let aqi = 270;
const aqiValue = document.getElementById("aqiValue");

setInterval(() => {
  aqi += Math.random() > 0.5 ? 1 : -1;
  aqiValue.textContent = aqi;
}, 3000);

// Water TDS
let tds = 680;
const tdsValue = document.getElementById("tdsValue");
const tdsStatus = document.getElementById("tdsStatus");

setInterval(() => {
  tds += Math.floor(Math.random() * 20) - 10;
  tds = Math.max(50, Math.min(2000, tds));

  tdsValue.innerHTML = `${tds} <small>ppm</small>`;

  let status = "Unfit";
  if (tds <= 300) status = "Excellent";
  else if (tds <= 600) status = "Good";
  else if (tds <= 900) status = "Poor";

  tdsStatus.textContent = status;
}, 4000);
