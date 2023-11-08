#!/usr/bin/env node

import {
  start, getUserAnswer, getRandomNumber, isEven,
  checkCorrectAnswer, questionsNumber,
} from '../src/index.js';

const brainEven = () => {
  const username = start();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log();

  let attemp = 0;
  let check;
  while (attemp < questionsNumber) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = getUserAnswer('Your answer: ');
    check = checkCorrectAnswer(username, correctAnswer, userAnswer);
    if (check) {
      attemp += 1;
    } else {
      return false;
    }
  }
  console.log(`Congratulations, ${username}!`);
  return true;
};

export default brainEven;
