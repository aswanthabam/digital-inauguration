var i = 0; // variable to keep track of the number of keypresses
var audio = new Audio("assets/Inauguration Background Music.mp3"); // audio for background music
var clickC = 0;
/*
  function to remove hidden class from the element given, 
  i.e to display an element
*/

function first(cl) {
  document.getElementsByClassName(cl)[0].classList.remove("hidden");
}

addEventListener("keypress", (event) => {
  visible();
  if (clickC < 4) clickC++;
});

addEventListener("mousedown", (event) => {
  visible();
  if (clickC < 4) clickC++;
});

/*
  function to display the elements one by one on keypress
*/

function visible() {
  if (i == 0) audio.play();
  if (i == 1) {
    first("fire-one");
    setInterval(() => {
      i++;
      if (i == 2) first("fire-two");
      if (i == 3) first("fire-three");
      if (i == 4) first("fire-four");
      if (i == 5) {
        first("fire-five");
        setTimeout(() => {
          document
            .getElementsByClassName("content")[0]
            .classList.remove("hidden");
          document.getElementsByClassName("villaku")[0].classList.add("done");
        }, 500);
      }
      if (clickC == 4) audio.pause();
    }, 1000);
  }
  if (i == 0) i++;
}
