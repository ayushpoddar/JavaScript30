const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const degreeOffset = 90;

function setDate() {
  const now = new Date();
  const secondsDegrees = ((now.getSeconds() / 60) * 360) + degreeOffset; // Added 90 due to initial offset
  const minutesDegrees = ((now.getMinutes() / 60) * 360) + degreeOffset;
  const hourDegrees = ((now.getHours() / 12) * 360) + degreeOffset;
  console.log(now.getMinutes())
  
  rotateByX(secondHand, secondsDegrees);
  rotateByX(minuteHand, minutesDegrees);
  rotateByX(hourHand, hourDegrees);
}

function rotateByX(ele, angle) {
  ele.style.transform = `rotate(${angle}deg)`;
}

setInterval(setDate, 1000)