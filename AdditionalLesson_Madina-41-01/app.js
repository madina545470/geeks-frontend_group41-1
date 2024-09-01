
let score = 0;
let correctAnswer = 0;

const questionElement = document.getElementById('question');
const scoreElement = document.getElementById('score');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    questionElement.textContent = `Сколько будет ${num1} * ${num2}?`;
}

submitButton.addEventListener('click', () => {
    const userAnswer = Number(answerInput.value);

    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введите число.');
        return;
    }

    if (userAnswer === correctAnswer) {
        score += 5;
    } else {
        score -= 3;
    }

    scoreElement.textContent = `Баллы: ${score}`;

    generateQuestion();
});

generateQuestion();
