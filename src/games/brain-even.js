#!/usr/bin/env node

import { runGame, isEven, getRandomNumber } from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const genNewQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
