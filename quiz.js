// Quiz questions and answers
const quizQuestions = [
    {
        question: "Which wave of feminism focused on reproductive rights and workplace equality?",
        options: ["First Wave", "Second Wave", "Third Wave", "Fourth Wave"],
        correct: 1
    },
    {
        question: "Who coined the term 'intersectionality'?",
        options: ["Simone de Beauvoir", "Bell Hooks", "Kimberlé Crenshaw", "Audre Lorde"],
        correct: 2
    },
    {
        question: "What year did women in the UK first get the right to vote?",
        options: ["1918", "1928", "1945", "1967"],
        correct: 0
    },
    {
        question: "Which feminist movement popularized the phrase 'The Personal is Political'?",
        options: ["Liberal Feminism", "Radical Feminism", "Socialist Feminism", "Postmodern Feminism"],
        correct: 1
    },
    {
        question: "What is the 'glass ceiling'?",
        options: [
            "A type of feminist art",
            "An invisible barrier preventing women from reaching top positions",
            "A feminist magazine",
            "A feminist theory about architecture"
        ],
        correct: 1
    },
    {
        question: "Who wrote 'The Second Sex'?",
        options: ["Virginia Woolf", "Simone de Beauvoir", "Betty Friedan", "Gloria Steinem"],
        correct: 1
    },
    {
        question: "What is the main focus of ecofeminism?",
        options: [
            "Women in environmental science",
            "The connection between women's oppression and environmental destruction",
            "Women's fashion and sustainability",
            "Women's health and nature"
        ],
        correct: 1
    }
];

// Create and show the quiz panel
function createQuizPanel() {
    const quizPanel = document.createElement('div');
    quizPanel.className = 'quiz-panel';
    quizPanel.innerHTML = `
        <div class="quiz-content">
            <h2>Test Your Feminist Knowledge</h2>
            <div id="quiz-container"></div>
            <button id="start-quiz" class="quiz-button">Start Quiz</button>
        </div>
    `;
    document.querySelector('main').prepend(quizPanel);

    let currentQuestion = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz-container');
    const startButton = document.getElementById('start-quiz');

    startButton.addEventListener('click', () => {
        showQuestion(0);
        startButton.style.display = 'none';
    });

    function showQuestion(index) {
        const question = quizQuestions[index];
        quizContainer.innerHTML = `
            <div class="question-container">
                <h3>Question ${index + 1} of ${quizQuestions.length}</h3>
                <p>${question.question}</p>
                <div class="options">
                    ${question.options.map((option, i) => `
                        <button class="option-button" data-index="${i}">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;

        const options = quizContainer.querySelectorAll('.option-button');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const selectedIndex = parseInt(option.dataset.index);
                if (selectedIndex === question.correct) {
                    score++;
                }

                if (currentQuestion < quizQuestions.length - 1) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    showResult();
                }
            });
        });
    }

    function showResult() {
        quizContainer.innerHTML = `
            <div class="result-container">
                <h3>Quiz Complete!</h3>
                <p>You scored ${score} out of ${quizQuestions.length}!</p>
                <button id="show-recommendation" class="quiz-button">Get Your Recommendation</button>
            </div>
        `;

        document.getElementById('show-recommendation').addEventListener('click', showRecommendation);
    }

    function showRecommendation() {
        const popup = document.createElement('div');
        popup.className = 'recommendation-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <button class="close-popup">&times;</button>
                <h2>Congratulations!</h2>
                <p>Based on your feminist knowledge, we recommend watching:</p>
                <h3>Desperate Housewives</h3>
                <img src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&w=800" alt="Desperate Housewives">
                <p>A show that explores complex female characters and their relationships while addressing various feminist themes.</p>
            </div>
        `;
        document.body.appendChild(popup);

        popup.querySelector('.close-popup').addEventListener('click', () => {
            popup.remove();
        });
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', createQuizPanel); 