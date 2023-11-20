import { runGame } from '../index.js';
import getRandomNumber from '../random-number.js';

const gameQuestion = 'What number is missing in the progression?';

const getProgression = (firstNum, diff, len) => Array(len)
  .fill().map((_, i) => firstNum + (i * diff));

const genNewQuestion = () => {
  const firstNum = getRandomNumber(1, 20);
  const diff = getRandomNumber(1, 5);
  const len = getRandomNumber(5, 10);
  const progression = getProgression(firstNum, diff, len);
  const replaceIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[replaceIndex];
  progression[replaceIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
