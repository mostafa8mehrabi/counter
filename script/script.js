let header = document.querySelector(".header");
let userText = document.querySelector("#userText");
let startButton = document.querySelector("#startButton");
let errorMessage = document.querySelector("#errorMessage");
let circularTimer = document.querySelector(".c100");
let timerNumber = document.querySelector("#timerNumber");
let loading = document.querySelector("#loading");
let endTime = document.querySelector("#endTime");

startButton.addEventListener("click", (e) => {
  let seconds = parseInt(userText.value);
  /////////////////////////////////////////////////////////////

  if (isNaN(seconds)) {
    errorMessage.textContent = "زمان را به درستی وارد کنید";
    errorMessage.style.display = "block";
    return;
  }

  /////////////////////////////////////////////////////////////

  errorMessage.style.display = "none";
  header.style.display = "none";
  circularTimer.style.display = "block";

  /////////////////////////////////////////////////////////////

  timerNumber.textContent = seconds;
  loading.style.display = "block";

  /////////////////////////////////////////////////////////////

  let orginalseconds = seconds;

  /////////////////////////////////////////////////////////////

  let intervalId = setInterval(() => {
    if (seconds <= 1) {
      clearInterval(intervalId);
      header.style.display = "block";
      circularTimer.style.display = "none";
      endTime.style.display = "block";
      loading.style.display = "none";
      userText.value = "";
    }
    seconds -= 1;
    timerNumber.textContent = seconds;

    /////////////////////////////////////////////////////////////
    if (lastPercent) circularTimer.classList.remove(lastPercent);

    let percent = Math.floor(
      ((orginalseconds - seconds) / orginalseconds) * 100
    );
    circularTimer.classList.add(`p${percent}`);
    let lastPercent = `p${percent}`;
    /////////////////////////////////////////////////////////////
  }, 1000);
});
