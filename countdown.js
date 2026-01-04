const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));
    async function startCountdown(sec) {
    for (let i = sec; i >= 0; i--) {
      display.textContent = i;
      await delay(1000); 
    }
    display.textContent = "Done ";
  }
    startBtn.addEventListener("click", () => {
    const time = Number(seconds.value);
    if (time >= 0) {
      startCountdown(time);
    }
  });
    
