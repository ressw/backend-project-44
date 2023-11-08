#!/usr/bin/env node

import {
  start, questionsNumber, getRandomNumber,
  isEven, getUserAnswer, logCorrectAnswer, gameOver,
} from '../src/index.js';

const brainEven = () => {
  const username = start();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log();

  let attemp = 0;
  while (attemp < questionsNumber) {
    const number = getRandomNumber();
    const check = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = getUserAnswer('Your answer: ');

    if (check === answer) {
      logCorrectAnswer();
      attemp += 1;
    } else {
      gameOver(username, answer, check);
      return false;
    }
  }
  console.log(`Congratulations, ${username}!`);
  return true;
};

export default brainEven;
