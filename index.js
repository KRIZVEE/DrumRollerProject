let drums = document.querySelectorAll('.drum')
let letter;
let audio;

for (let drum of drums) {
  drum.addEventListener('click', function () {
    letter = this.getAttribute('class')[0];
    makeSound(letter)
    buttonAnimation(letter)
  })
}

document.addEventListener('keydown', (e) => {
  makeSound(e.key)
  buttonAnimation(e.key)
})

function makeSound(letter) {


  switch (letter) {
    case 'a':
      audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case 'f':
      audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
  }

}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`)
  activeButton.classList.add('pressed')
  setTimeout(() => {
    activeButton.classList.remove('pressed')
  }, 10);

}