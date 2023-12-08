var i = 0;
var audio = new Audio("assets/Inauguration Background Music.mp3");
function first(cl) {
  console.log(document.getElementsByClassName(cl)[0]);
  document.getElementsByClassName(cl)[0].classList.remove("hidden");
  // visible();
}
addEventListener("keypress", (event) => {
  visible();
});
function visible() {
  if (i == 0) audio.play();
  if (i == 1) first("fire-one");
  if (i == 2) first("fire-two");
  if (i == 3) first("fire-three");
  if (i == 4) first("fire-four");
  if (i == 5) {
    first("fire-five");
    setTimeout(() => {
      document.getElementsByClassName("content")[0].classList.remove("hidden");
      document.getElementsByClassName("villaku")[0].classList.add("done");
    }, 500);
  }
  i++;
  // // if (i == 6) first("fire-six");
  // if (i == 7) {
  //   first("fire-seven");

  // }
}

// setInterval(visible, 1000);
