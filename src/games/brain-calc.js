import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operation ${sign} is not supported`);
  }
};

const genNewQuestion = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 10);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculate(num1, num2, sign);
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
