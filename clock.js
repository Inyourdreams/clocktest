const clock = document.getElementById('clock');
const color = document.getElementById('color');

function mineClock() {
  let time = new Date();
  let h = (time.getHours() % 12).toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();


  if (h.length < 2) {
    h = '0' + h;
   }

  if (m.length < 2) {
    m = "0" + m;
  }

  if (s.length < 2) {
    s = '0' + s;
  }
    
  let mineClockString = h + ":" + m + ":" + s;
  let colorString = "#" + h + m + s;

  clock.textContent = mineClockString;
  color.textContent = colorString;

  document.body.style.background = colorString;

}

mineClock();
setInterval(mineClock, 1000);