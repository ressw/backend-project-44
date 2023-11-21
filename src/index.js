import readlineSync from 'readline-sync';

export const questionsNumber = 3;

export const runGame = (gameQuestion, genNewQuestion) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  if (!gameQuestion) return null;
  console.log(gameQuestion);
  const attemps = 3;

  for (let i = 0; i < attemps; i += 1) {
    const [question, correctAnswer] = genNewQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};
