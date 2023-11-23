import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  const numSqrt = Math.sqrt(num);
  for (let div = 2; div <= numSqrt; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }

  return true;
};

const genNewQuestion = () => {
  const question = getRandomNumber(1, 2);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
