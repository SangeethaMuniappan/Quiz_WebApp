let startbtn = document.getElementById('start-button');
let submitbtn = document.getElementById('submit-button');
let nextbtn = document.getElementById('next-button');
let loader = document.getElementById('loader-view');
let QuizHome = document.getElementsByClassName('mx-auto');
let quiz = document.getElementById('quiz');
let questions = document.getElementById('question');
let optionsElement = document.getElementById('options-container');


quiz.style.display = 'none'
loader.style.display = 'none'



startbtn.onclick = () => {
    QuizHome[0].style.display = 'none';
    loader.style.display = 'block';
    getquestions()
	submitbtn.setAttribute('disabled','true')
	nextbtn.setAttribute('disabled','true')
}

let count = 0;

async function getquestions() {

	count++;
	console.log("count :"+count);
	if (count>6){
	alert("Game over!!!   Thank You For Attending the Quiz!!! ");
	window.location = 'alert.html';
	
	hideloader()

	}else{


    let QuestionId = randomIntInRange(0, 6);

	console.log("Question id: "+QuestionId);

	let url = "https://jsonmock.hackerrank.com/api/questions/" + QuestionId;
	let response = await fetch(url);
	
	var data = await response.json();
	if (response) {
		hideloader();
	}
	showQuestion(data)
}
}


function hideloader() {
loader.style.display = 'none';
}

function showQuestion(data) {
	let optionsList = ``;
	let i = 0;
	const answer = data.data.answer
	console.log("Answer : " + answer)
	for (let r of data.data.options) {
		optionsList += `<div id="${i}" class="options" value="${answer}">${r}</div>`
        i += 1
	}

    quiz.style.display = 'block';

	questions.innerText = data.data.question;
    optionsElement.innerHTML = optionsList;


	let options = document.querySelectorAll(".options")
	console.log(options[0]);
	console.log(options[0].getAttribute('value'))

	

	var selected
	var num
	options[0].addEventListener('click',(e) =>{
		num = 0
		e.currentTarget.classList.add('user-answer')
		submitbtn.removeAttribute('disabled')
		selected = options[0].getAttribute('value')
		options[1].classList.remove('user-answer')
		options[2].classList.remove('user-answer')
		options[3].classList.remove('user-answer')
	})

	options[1].addEventListener('click',(e) =>{
		num = 1
		e.currentTarget.classList.add('user-answer')
		submitbtn.removeAttribute('disabled')
		selected = options[1].getAttribute('value')
		options[0].classList.remove('user-answer')
		options[2].classList.remove('user-answer')
		options[3].classList.remove('user-answer')
	})

	options[2].addEventListener('click',(e) =>{
		num = 2
		e.currentTarget.classList.add('user-answer')
		submitbtn.removeAttribute('disabled')
		selected = options[2].getAttribute('value')
		options[0].classList.remove('user-answer')
		options[1].classList.remove('user-answer')
		options[3].classList.remove('user-answer')
	})

	options[3].addEventListener('click',(e) =>{
		num = 3
		e.currentTarget.classList.add('user-answer')
		submitbtn.removeAttribute('disabled')
		selected = options[3].getAttribute('value')
		options[0].classList.remove('user-answer')
		options[1].classList.remove('user-answer')
		options[2].classList.remove('user-answer')

	})


	submitbtn.onclick = () => {
		
		if(num == selected){
			options[selected].setAttribute("class", "correct-answer")
		}
		else{
			options[num].setAttribute("class", "wrong-answer")
			options[selected].setAttribute("class", "correct-answer")
		}

		submitbtn.setAttribute('disabled','true')
		nextbtn.removeAttribute('disabled')	
	}
	
	 
	nextbtn.onclick = () => {
		QuizHome[0].style.display = 'none';
		loader.style.display = 'block';
		getquestions()
		
		submitbtn.setAttribute('disabled','true')
		nextbtn.setAttribute('disabled','true')
	}
	const randomIntInRange = (min, max, notIn) => {
		const value = Math.floor(Math.random() * (max - min + 1) + min);
		if (notIn && notIn.includes(value)) {
		  return randomIntInRange(min, max, notIn);
		} else {
		  return value;
		}
	  };
	
	
}