document.querySelectorAll(".drum").forEach((button) =>
  button.addEventListener("click", function () {
    switch (button.innerHTML) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        console.log(statement);
    }
  })
);
// match keyboard buttons with the inner html of the button and when press that keyboard button, play the sound

document.addEventListener("keypress", function (event) {
  switch (event.key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(statement);
  }
});

// add background shadow when click or press the button and remove it after pressing the button and dont change the color of the text just add shadow to the button. make sure keydown event is working
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      document.querySelector(".w").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".w").classList.remove("pressed");
      }, 100);
      break;
    case "a":
      document.querySelector(".a").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".a").classList.remove("pressed");
      }, 100);
      break;
    case "s":
      document.querySelector(".s").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".s").classList.remove("pressed");
      }, 100);
      break;
    case "d":
      document.querySelector(".d").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".d").classList.remove("pressed");
      }, 100);
      break;
    case "j":
      document.querySelector(".j").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".j").classList.remove("pressed");
      }, 100);
      break;
    case "k":
      document.querySelector(".k").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".k").classList.remove("pressed");
      }, 100);
      break;
    case "l":
      document.querySelector(".l").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".l").classList.remove("pressed");
      }, 100);
      break;
    default:
      console.log(statement);
  }
});
// make the same thing for mouse click event and makesure after clicking the button, the shadow is removed after 100ms
document.querySelectorAll(".drum").forEach((button) =>
  button.addEventListener("click", function () {
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 100);
  })
);
