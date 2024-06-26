/* eslint-disable no-console */
/* eslint-disable no-alert */
export default class Goblin {
  constructor() {
    this.noCaught = 0;
    this.caught = 0;
  }

  changePosition() {
    const position = [...document.querySelectorAll('.block')];
    let posGoblin = 0;
    const gob = document.querySelector('.goblins');
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * position.length);
      if (random !== posGoblin) {
        position[posGoblin].classList.remove('goblin');
        position[random].classList.add('goblin');
        this.noCaught += 1;
        posGoblin = random;
        gob.innerText = `Пропустил: ${this.noCaught}`;
      }
      if (this.noCaught === 5) {
        position[random].classList.remove('goblin');
        alert('😤 Вы проиграли! 😤');
        clearInterval(interval);
        this.resetGame();
        window.location.reload();
      }
      if (this.caught === 5) {
        position[random].classList.remove('goblin');
        alert('🏆 Вы победили! 🏆');
        clearInterval(interval);
        this.resetGame();
        window.location.reload();
      }
    }, 1000);
  }

  goblinCatch(element) {
    const points = document.querySelector('.points');

    if (!points) {
      console.error('Unable to find element');
      return;
    }

    element.addEventListener('click', (event) => {
      const e = event.target;
      if (e.classList.contains('goblin')) {
        e.classList.remove('goblin');
        this.noCaught -= 1;
        this.caught += 1;
        points.innerText = `Поймал: ${this.caught}`;
      }
    });
  }

  resetGame() {
    this.noCaught = 0;
    this.caught = 0;
  }
}
