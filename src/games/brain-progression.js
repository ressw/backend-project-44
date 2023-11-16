#!/usr/bin/env node

import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const getProgression = () => {
  const firstNum = getRandomNumber(1, 20);
  const diff = getRandomNumber(1, 5);
  const len = 5 + getRandomNumber(2, 5);
  const progression = Array(len).fill()
    .map((_, i) => firstNum + (i * diff));
  return progression;
};

const gameQuestion = 'What number is missing in the progression?';

const genNewQuestion = () => {
  const progression = getProgression();
  const replaceIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[replaceIndex];
  progression[replaceIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
