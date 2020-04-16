const date = new Date();
const hours = date.getHours() % 12;
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const hourContainer = document.getElementById('hour');
const minuteContainer = document.getElementById('minute');
const secondContainer = document.getElementById('second');

const hourAngle = (hours * 30) + (minutes / 2);
const minuteAngle = minutes * 6;
const secondAngle = seconds * 6;

hourContainer.style.transform = `rotate(${hourAngle}deg)`;
minuteContainer.style.transform = `rotate(${minuteAngle}deg)`;
secondContainer.style.transform = `rotate(${secondAngle}deg)`;

function minuteHandFirstMove() {
  const minuteHand = document.getElementsByClassName('minute')[0];
  const delay = 60 - seconds;
  minuteHand.style.animationDelay = `${delay}s`;

  setTimeout(() => {
    minuteContainer.style.transform = `rotate(${minuteAngle + 6}deg)`;
  }, delay * 1000);
}

minuteHandFirstMove();