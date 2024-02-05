const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedTime = 0;
let Isrunning = false;
function start() {
  if (!Isrunning) {
    starttime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    Isrunning = true;
  }
}
function stop() {
  if (Isrunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - starttime;
    Isrunning = false;
  }
}
function reset() {
  clearInterval(timer);
  starttime = 0;
  elapsedTime = 0;
  Isrunning = false;
  display.textContent = "00:00:00:00";
}
function update() {
  const currenttime = Date.now();
  let elapsed = currenttime - starttime;
  let hours = Math.floor(elapsed / (1000 * 60 * 60));
  let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsed / 1000) % 60);
  let milliseconds = Math.floor((elapsed % 1000) / 10);
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  
}
