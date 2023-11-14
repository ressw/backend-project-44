#!/usr/bin/env node

import { runGame, getRandomNumber } from '../index.js';

const getRandomSignsResult = (num1, num2, sign) => {
  if (sign === '+') return num1 + num2;
  if (sign === '-') return num1 - num2;
  if (sign === '*') return num1 * num2;
  return null;
};

const gameQuestion = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const genNewQuestion = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 10);
  const sign = signs[getRandomNumber(0, 2)];
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = getRandomSignsResult(num1, num2, sign);
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
