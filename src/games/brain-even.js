#!/usr/bin/env node

import { runGame, getRandomNumber } from '../index.js';

export const isEven = (num) => num % 2 === 0;

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const genNewQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
