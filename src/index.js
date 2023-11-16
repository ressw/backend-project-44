import readlineSync from 'readline-sync';

export const questionsNumber = 3;

export const runGame = (gameQuestion, genNewQuestion) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  if (!gameQuestion) return null;
  console.log(gameQuestion);
  let [question, correctAnswer, userAnswer] = ['', '', ''];

  for (let i = 0; i < 3; i += 1) {
    [question, correctAnswer] = genNewQuestion();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) !== String(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};
