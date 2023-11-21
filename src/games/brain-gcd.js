import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getNOD = (num1, num2) => {
  if (num2 === 0) return num1;
  if (num2 > num1) return getNOD(num2, num1);
  return getNOD(num2, num1 % num2);
};

const genNewQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getNOD(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
