#!/usr/bin/env node

import {
  start, getUserAnswer,
  getRandomNumber, logCorrectAnswer, gameOver, questionsNumber,
} from '../src/index.js';

const getProgression = () => {
  const firstNum = getRandomNumber(20);
  const diff = getRandomNumber(5);
  const len = 5 + getRandomNumber(5);
  const progression = Array(len).fill()
    .map((_, i) => firstNum + (i * diff));
  return progression;
};

const brainProgression = () => {
  const username = start();
  console.log('What number is missing in the progression?');
  console.log();

  let attemp = 0;
  while (attemp < questionsNumber) {
    const progression = getProgression();
    const replaceIndex = getRandomNumber(progression.length - 1);
    const correctAnswer = progression[replaceIndex];
    progression[replaceIndex] = '..';
    const progressionStr = progression.join(' ');
    console.log(`Question: ${progressionStr}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (correctAnswer === parseInt(userAnswer, 10)) {
      logCorrectAnswer();
      attemp += 1;
    } else {
      gameOver(username, userAnswer, correctAnswer);
      return false;
    }
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};

export default brainProgression;
