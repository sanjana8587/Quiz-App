const quiz = [
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit","Central Program Utility","Computer Personal Unit","Control Processing Unit"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus","Jupiter","Mars","Saturn"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["WO","H2O","HO2","W2O"],
        answer: 1
    },
    {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates","Steve Jobs","Tim Berners-Lee","Linus Torvalds"],
        answer: 2
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing","Seoul","Bangkok","Tokyo"],
        answer: 3
    }
        
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = quiz[current];

    questionEl.innerText = q.question;
    progressEl.innerText = `Question ${current + 1} of ${quiz.length}`;

    answersEl.innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => checkAnswer(btn, index);

        answersEl.appendChild(btn);
    });
}

function checkAnswer(button, index) {
    const correctIndex = quiz[current].answer;
    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (index === correctIndex) {
        score++;
    }
}

nextBtn.onclick = function () {
    current++;

    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").innerHTML = `
            <h2>Quiz Finished!</h2>
            <p>Your Score: ${score}/${quiz.length}</p>
            <button onclick="restartQuiz()">Restart</button>
        `;
    }
};

function restartQuiz() {
    location.reload();
}

loadQuestion();