const quizData = [
    {
        question: "How old are you?",
        a:"10",
        b:"25",
        c:"33",
        d:"54",
        correct:'c'
    },
    {
        question: "What is your Favorite Programming Language?",
        a:"Python",
        b:"C",
        c:"C++",
        d:"Java",
        correct:'a'
    },
    {
        question: "Who is president of US?",
        a:"Donald Trump",
        b:"Florin Pop",
        c:"Ivan Saldano",
        d:"Joe Biden",
        correct:'d'
    },
]


const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselect();
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselect(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
    }
})