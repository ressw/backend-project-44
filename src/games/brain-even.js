import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genNewQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
