// TODO: write code here
import Board from './board';
import Goblin from './goblin';

const container = document.querySelector('.container');
const board = new Board();
const goblin = new Goblin();
board.draw();
goblin.changePosition();
goblin.goblinCatch(container);
