for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll("button")[i].addEventListener("click", function (){

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {

    case "w":
      var co1 = new Audio("sounds/goc4.mp3");
      co1.play();
    break;

    case "a":
      var co2 = new Audio("sounds/goc3.mp3");
      co2.play();
    break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "f":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "h":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick_bass = new Audio("sounds/goc3.mp3");
      kick_bass.play();
    break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
