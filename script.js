const hrsTens = document.getElementById("hrsTens");
const hrsOnes = document.getElementById("hrsOnes");
const minTens = document.getElementById("minTens");
const minOnes = document.getElementById("minOnes");
const secTens = document.getElementById("secTens");
const secOnes = document.getElementById("secOnes");

function setTime(time, tens, ones) {
  if (time >= 10) {
    time = time.toString().split("");
    tens.style.transform = `translateY(-${Number(time[0]) * 100}%)`;
    ones.style.transform = `translateY(-${Number(time[1]) * 100}%)`;
  } else {
    sec = sec.toString().split("");
    sec.unshift("0");
    tens.style.transform = `translateY(-${Number(time[0]) * 100}%)`;
    ones.style.transform = `translateY(-${Number(time[1]) * 100}%)`;
  }
}

setInterval(() => {
  let time = new Date();
  setTime(time.getSeconds(), secTens, secOnes);
  setTime(time.getMinutes(), minTens, minOnes);
  setTime(time.getHours(), hrsTens, hrsOnes);
}, 1000);
