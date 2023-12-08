var i = 0;
function first(cl) {
  console.log(document.getElementsByClassName(cl)[0]);
  document.getElementsByClassName(cl)[0].classList.remove("hidden");
  // visible();
}
addEventListener("keypress", (event) => {
  visible();
});
function visible() {
  i++;
  if (i == 1) first("fire-one");
  if (i == 2) first("fire-two");
  if (i == 3) first("fire-three");
  if (i == 4) first("fire-four");
  if (i == 5) first("fire-five");
  if (i == 6) first("fire-six");
  if (i == 7) {
    first("fire-seven");
    setTimeout(() => {
      document.getElementsByClassName("title")[0].classList.remove("hidden");
    }, 500);
  }
}

// setInterval(visible, 1000);
