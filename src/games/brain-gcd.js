import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (number1, number2) => {
  if ((number1 === 0) || (number2 === 0)) return 1;
  let [minNum, maxNum] = [number1, number2];
  if (minNum > maxNum) {
    minNum = number2;
    maxNum = number1;
  }

  if (maxNum % minNum === 0) return minNum;
  let divisor = Math.trunc(minNum / 2);
  while (divisor > 1) {
    if (maxNum % divisor === 0 && minNum % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const genNewQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGreatestDivisor(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
