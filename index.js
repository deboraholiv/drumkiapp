const buttons = document.querySelectorAll("button")

buttons.forEach((button)=> {  
  button.addEventListener("click", ()=> {
    const drumSound = button.innerHTML
    handleDrum(drumSound)
    buttonAnimation(drumSound)
  })
  button
})

document.addEventListener("keydown", (e)=> {
  handleDrum(e.key)
  buttonAnimation(e.key)
})

function handleDrum (elem) {
  switch (elem) {
    case "w":
      var crash = new Audio('./sounds/crash.mp3')
      crash.play()
      break;
    case "a":
      var kick = new Audio('./sounds/kick-bass.mp3')
      kick.play()
      break;
    case "s":
      var snare = new Audio('./sounds/snare.mp3')
      snare.play()
      break;
    case "d":
      var tom1 = new Audio('./sounds/tom-1.mp3')
      tom1.play()
      break;
    case "j":
      var tom2 = new Audio('./sounds/tom-2.mp3')
      tom2.play()
      break;
    case "k":
      var tom3 = new Audio('./sounds/tom-3.mp3')
      tom3.play()
      break;
    case "l":
      var tom4 = new Audio('./sounds/tom-4.mp3')
      tom4.play()
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey)
  activeButton.classList.toggle("pressed")
  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 100)
}


