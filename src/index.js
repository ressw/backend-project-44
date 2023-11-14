import readlineSync from 'readline-sync';

export const questionsNumber = 3;
export function getRandomNumber(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const isEven = (num) => num % 2 === 0;

export const runGame = (gameQuestion, genNewQuestion) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  if (!gameQuestion) return null;
  console.log();
  console.log(`${gameQuestion}\n`);
  let attemp = 0;
  let [question, correctAnswer, userAnswer] = ['', '', ''];
  while (attemp < questionsNumber) {
    [question, correctAnswer] = genNewQuestion();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === String(userAnswer)) {
      console.log('Correct!\n');
      attemp += 1;
    } else {
      console.log();
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${username}!`);
  return true;
};
