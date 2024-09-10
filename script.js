const questions = [
    {
        question: "1. What is the time complexity of binary search?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
        answer: "O(log n)"
    },
    {
        question: "2. Which data structure is used in a depth-first search?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack"
    },
    {
        question: "3. Which of the following is not a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "4. In a max heap, the value of each node is:",
        options: ["Greater than or equal to the value of its children", "Less than the value of its children", "Equal to the value of its children", "None of the above"],
        answer: "Greater than or equal to the value of its children"
    },
    {
        question: "5. Which of the following is used for implementing recursion?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Stack"
    },
    {
        question: "6. What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
        answer: "O(n^2)"
    },
    {
        question: "7. Which layer of the OSI model is responsible for routing?",
        options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
        answer: "Network layer"
    },
    {
        question: "8. Which of the following sorting algorithms has the best average-case time complexity?",
        options: ["Bubble sort", "Selection sort", "Merge sort", "Insertion sort"],
        answer: "Merge sort"
    },
    {
        question: "9. Which data structure is used for breadth-first search (BFS) of a graph?",
        options: ["Stack", "Queue", "Priority queue", "Hash table"],
        answer: "Queue"
    },
    {
        question: "10. What is the main advantage of using a hash table?",
        options: ["Insertion and search operations are fast", "Elements are stored in a sorted order", "It uses less memory", "It is easier to implement"],
        answer: "Insertion and search operations are fast"
    },
    {
        question: "11. Which of the following is a non-volatile memory?",
        options: ["RAM", "ROM", "Cache", "Register"],
        answer: "ROM"
    },
    {
        question: "12. Which protocol is used for sending email?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: "SMTP"
    },
    {
        question: "13. What is the primary function of an operating system?",
        options: ["Managing hardware resources", "Word processing", "Data mining", "Image editing"],
        answer: "Managing hardware resources"
    },
    {
        question: "14. Which of the following is an example of a real-time operating system?",
        options: ["Windows", "Linux", "RTOS", "Unix"],
        answer: "RTOS"
    },
    {
        question: "15. Which algorithm is used to find the shortest path in a graph?",
        options: ["Dijkstra's algorithm", "Prim's algorithm", "Kruskal's algorithm", "Floyd-Warshall algorithm"],
        answer: "Dijkstra's algorithm"
    },
    {
        question: "16. What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "Sequence Query Language"],
        answer: "Structured Query Language"
    },
    {
        question: "17. Which data structure is used to implement a priority queue?",
        options: ["Stack", "Queue", "Heap", "Linked list"],
        answer: "Heap"
    },
    {
        question: "18. Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Recursion", "Dynamic typing", "Pointers"],
        answer: "Encapsulation"
    },
    {
        question: "19. Which type of database is used to store multidimensional data?",
        options: ["Relational database", "NoSQL database", "Object-oriented database", "Data warehouse"],
        answer: "Data warehouse"
    },
    {
        question: "20. Which of the following is used for securing communication over the internet?",
        options: ["TCP", "UDP", "SSL", "FTP"],
        answer: "SSL"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const showAnswerButton = document.getElementById('show-answer-button');
const questionContainer = document.getElementById('question-container');
const questionBox = document.getElementById('question-box');
const answerButtons = document.querySelectorAll('.answer-button');
const answerFlex = document.getElementById('answer-flex');
const resultInfo = document.getElementById('result-info');
const endGameContainer = document.getElementById('end-game-container');
const endImageContainer = document.getElementById('end-image-container');
const startButtonContainer = document.getElementById('start-button-container');
const buttonContainer = document.getElementById('button-container');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', showNextQuestion);
previousButton.addEventListener('click', showPreviousQuestion);
showAnswerButton.addEventListener('click', showAnswer);

answerButtons.forEach(button => {
    button.addEventListener('click', selectAnswer);
});

function startGame() {
    startButtonContainer.classList.add('hide');
    showNextQuestion();
}

function showNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resetState();
        displayQuestion(questions[currentQuestionIndex]);
    }
}

function resetState() {
    questionContainer.classList.remove('hide');
    answerFlex.classList.remove('hide');
    buttonContainer.classList.remove('hide');
    nextButton.classList.add('hide');
    showAnswerButton.classList.add('hide');
    answerButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'wrong');
    });
}

function displayQuestion(question) {
    questionBox.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.options[index];
    });
    previousButton.disabled = currentQuestionIndex === 0;
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.innerText;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
    showAnswerButton.classList.remove('hide');
    currentQuestionIndex++;
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex - 1];
    answerButtons.forEach(button => {
        if (button.innerText === currentQuestion.answer) {
            button.classList.add('correct');
        }
    });
    showAnswerButton.classList.add('hide');
}

function endGame() {
    questionContainer.classList.add('hide');
    answerFlex.classList.add('hide');
    buttonContainer.classList.add('hide');
    endGameContainer.classList.remove('hide');
    endImageContainer.classList.remove('hide');
    resultInfo.innerText = `You scored ${score} out of ${questions.length}!`;
}
