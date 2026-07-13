const quizQuestions = [
	{
		question: "What does HTML stand for?",
		options: ["hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlinks Text Markup Language"],
		answer: 1		
	},	
	{
		question: "Which tag is used for the largest heading?",
		options: ["<h6>", "<heading>", "<h1>"],
		answer: 2
	},
	{
		question: "What does CSS control?",
		options: ["Page Structure", "Page Behavior", "Page Styling"],
		answer: 2
	}

];


let currentQuestion = 0;
let score = 0;

const questionText = document.querySelector("#questionText");
const optionContainer = document.querySelector("#optionContainer");
const scoreText = document.querySelector("#scoreText"); 

function loadQuestion() {
	let current = quizQuestions[currentQuestion];
	questionText.textContent = current.question;
	optionContainer.innerHTML = ""; 

	current.options.forEach(function(option, index) {
		let btn = document.createElement("button");
		btn.textContent = option;
		btn.addEventListener("click", function() {
			checkAnswer(index);
		});
		optionContainer.appendChild(btn); 
	});

}


function checkAnswer(selectedIndex) {
	if (selectedIndex === quizQuestions[currentQuestion].answer) {
		score++;
	}

	currentQuestion++;

	if (currentQuestion < quizQuestions.length){
		loadQuestion();
	}

	else {
		questionText .textContent = "Quiz Completed!";
		optionContainer.innerHTML = "";
	}

	scoreText.textContent = "Score: " + score + "/" + quizQuestions.length;
}

loadQuestion();