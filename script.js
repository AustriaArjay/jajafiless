const questions = [
    {
        question: "What is the primary purpose of an Enterprise Resource Planning (ERP) system?",
        answers: [
            { Text: "To provide only financial reporting", correct: false },
            { Text: "To integrate business processes and information", correct: true },
            { Text: "To store only historical information", correct: false },
            { Text: "To replace all employees with automation", correct: false },
        ]
    },
    {
        question: "Which of the following is a problem that may occur when departments use separate systems?",
        answers: [
            { Text: "Reports may take longer to prepare", correct: true },
            { Text: "All departments automatically share identical information", correct: false },
            { Text: "Data becomes immediately available everywhere", correct: false },
            { Text: "Information transfer errors are eliminated", correct: false },
        ]
    },
    {
        question: "Which business function is included among the major functions supported by ERP?",
        answers: [
            { Text: "Social Media Management", correct: false },
            { Text: "Personal Entertainment", correct: false },
            { Text: "Human Resources", correct: true },
            { Text: "Graphic Design", correct: false },
        ]
    },
    {
        question: "What does ERP configuration refer to?",
        answers: [
            { Text: "How historical sales are analyzed", correct: false },
            { Text: "How employees are recruited", correct: false },
            { Text: "How financial statements are manually prepared", correct: false },
            { Text: "How the ERP system is set up and structured", correct: true },
        ]
    },
    {
        question: "Which server handles application processing in the basic server configuration?",
        answers: [
            { Text: "Database Server", correct: false },
            { Text: "Application Server", correct: true },
            { Text: "Inventory Server", correct: false },
            { Text: "Accounting Server", correct: false },
        ]
    },
    {
        question: "Which activity is an example of OLTP?",
        answers: [
            { Text: "Analyzing regional sales", correct: false },
            { Text: "Studying product profitability", correct: false },
            { Text: "Recording a customer payment", correct: true },
            { Text: "Reviewing historical performance", correct: false },
        ]
    },
    {
        question: "What is OLAP primarily designed for?",
        answers: [
            { Text: "Analysis and decision-making", correct: true },
            { Text: "Recording purchase orders", correct: false },
            { Text: "Receiving inventory", correct: false },
            { Text: "Processing customer payments", correct: false },
        ]
    },
    {
        question: "Which of the following is stored in an ERP database?",
        answers: [
            { Text: "Only employee passwords", correct: false },
            { Text: "Only financial statements", correct: false },
            { Text: "Only historical sales trends", correct: false },
            { Text: "Customer and supplier records", correct: true },
        ]
    },
    {
        question: "What is bolt-on software?",
        answers: [
            { Text: "A database used by ERP", correct: false },
            { Text: "Additional software that works alongside ERP", correct: true },
            { Text: "A method for cleaning data", correct: false },
            { Text: "A replacement for the entire ERP system", correct: false },
        ]
    },
    {
        question: "What is the main purpose of a data warehouse?",
        answers: [
            { Text: "To process only daily transactions", correct: false },
            { Text: "To replace every operational system", correct: false },
            { Text: "To support analysis and decision-making", correct: true },
            { Text: "To process only customer payments", correct: false },
        ]
    },
    {
        question: "Which step comes immediately after Extract in the data warehousing process?",
        answers: [
            { Text: "Clean", correct: true },
            { Text: "Load", correct: false },
            { Text: "Transform", correct: false },
            { Text: "Report", correct: false },
        ]
    },
    {
        question: "What happens during the Transform step of data warehousing?",
        answers: [
            { Text: "Data is taken from operational systems", correct: false },
            { Text: "Data is placed into the warehouse", correct: false },
            { Text: "Data is corrected or removed", correct: false },
            { Text: "Data is converted into an appropriate format", correct: true },
        ]
    },
    {
        question: "Which is an identified risk of ERP implementation?",
        answers: [
            { Text: "Guaranteed low cost", correct: false },
            { Text: "Employee resistance to change", correct: true },
            { Text: "Guaranteed operational continuity", correct: false },
            { Text: "Guaranteed correct system selection", correct: false },
        ]
    },
    {
        question: "What is a characteristic of Big Bang ERP implementation?",
        answers: [
            { Text: "The organization switches to the new ERP all at once", correct: true },
            { Text: "The ERP is introduced gradually", correct: false },
            { Text: "Only purchasing is implemented permanently", correct: false },
            { Text: "The ERP is implemented one function at a time", correct: false },
        ]
    },
    {
        question: "Which statement describes phased-in ERP implementation?",
        answers: [
            { Text: "All ERP functions are activated simultaneously", correct: false },
            { Text: "The old system is never replaced", correct: false },
            { Text: "ERP is implemented gradually", correct: true },
            { Text: "Only accounting is implemented", correct: false },
        ]
    },
    {
        question: "What does segregation of duties help prevent?",
        answers: [
            { Text: "Employees having different responsibilities", correct: false },
            { Text: "Authorized transactions", correct: false },
            { Text: "Access to needed information", correct: false },
            { Text: "One employee controlling all important stages of a transaction", correct: true },
        ]
    },
    {
        question: "Which function should a sales clerk NOT automatically have according to the reviewer?",
        answers: [
            { Text: "Entering sales orders", correct: false },
            { Text: "Approving payments", correct: true },
            { Text: "Viewing sales orders", correct: false },
            { Text: "Performing sales-related activities", correct: false },
        ]
    },
    {
        question: "Which of the following should accountants consider regarding ERP accounting records?",
        answers: [
            { Text: "Accuracy", correct: true },
            { Text: "Office decoration", correct: false },
            { Text: "Employee popularity", correct: false },
            { Text: "Entertainment value", correct: false },
        ]
    },
    {
        question: "When auditing a data warehouse, which question should an auditor consider?",
        answers: [
            { Text: "Which employee has the newest computer?", correct: false },
            { Text: "Who has access?", correct: true },
            { Text: "Which department has the largest office?", correct: false },
            { Text: "Which employee works the longest hours?", correct: false },
        ]
    },
    {
        question: "Which statement best summarizes the difference between ERP and a data warehouse?",
        answers: [
            { Text: "ERP supports analysis while a data warehouse processes daily transactions", correct: false },
            { Text: "ERP and data warehouses have exactly the same purpose", correct: false },
            { Text: "ERP supports operations while a data warehouse supports analysis", correct: true },
            { Text: "A data warehouse replaces all ERP functions", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.Text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    })
    nextButton.style.display = "block";
}
function showscore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showscore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
