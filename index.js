function playSampleSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

function animateButton(keyCode) {
  const button = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!button) return;
  button.classList.add('playing');
}

function play(keyCode) {
  playSampleSound(keyCode);
  animateButton(keyCode);
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

function handleClick() {
  play(this.dataset.key);
}

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', handleClick);
});

window.addEventListener('keydown', ({ key }) => play(key));
