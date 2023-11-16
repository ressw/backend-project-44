#!/usr/bin/env node

import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  let div = 2;
  const maxDiv = Math.trunc(num / 2);
  while (div <= maxDiv) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }

  return true;
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genNewQuestion = () => {
  const question = getRandomNumber(1, 350);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
