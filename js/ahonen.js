let results = new Array;
let correctAnswers = 0;
let currentSolution = 0;
let counter  = 1;
//Random number generator
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min) + min);
}

//Returns mathProblem using random number generator and two variables
function mathProblem() {
  let int1 = getRandomInt()
  let int2 = getRandomInt()
  let sentence = int1 + " + " + int2;
  document.getElementById("mathproblem").innerHTML = sentence;
  nextProblem.disabled = true;
  return currentSolution = int1 + int2;
}


let check = document.getElementById("check")
check.addEventListener("click", calculate)
let answerCheck = document.getElementById("answercheck")


function calculate() {
  let studentsAnswer = Number(document.getElementById("answer").value);

  if (studentsAnswer == "") {
    answerCheck.innerHTML = "Vastaa tehtävään ennen tarkistusta!"
    return;
  }

  if (studentsAnswer == currentSolution) {
    answerCheck.innerHTML = "Vastaus on oikein";
    correctAnswers++

  } else {
    answerCheck.innerHTML = "Vastaus on väärin! Oikea vastaus on: " + currentSolution;
  }

  document.getElementById("answer").readOnly = true;
  let mathQuestion = document.getElementById("mathproblem").innerHTML
  results.push(counter + ". " + mathQuestion + " = " + currentSolution + ". " + "Vastauksesi : " + studentsAnswer)
  nextProblem.disabled = false;
  counter++;

  if (counter == 6) {
    nextProblem.style.display = "none"
    resultsButton.style.display = "inline-block"
  }
}

let nextProblem = document.getElementById("nextproblem")
nextProblem.addEventListener("click", nextMathProblem)
let answer = document.getElementById("answer")

function nextMathProblem() { 
  answerCheck.innerHTML = ""
  answer.value = ""
  document.getElementById("answer").readOnly = false;
  mathProblem()
}
mathProblem()

let resultsButton = document.getElementById("showresults")
resultsButton.addEventListener("click", showResults)
function showResults() {
  document.getElementById("quizcontent").style.display = "none"
  document.getElementById("resultscontent").style.display = "block"
  let resultBox = document.getElementById("resultsbox")
  
  results.forEach(i => {
  let li = document.createElement("li")
  li.textContent = i
  resultBox.appendChild(li)
  });
}





/*let startButton = document.getElementById("start")
startButton.addEventListener("click", progress)

function startQuiz() {

}

function progress() {
    let progress = document.getElementById("filler");
    let leveys = 0;
    let id = setinterval(frame, 10);
    function frame() {
        if (leveys >= 100) {
            clearInterval(id);
        } else {
            leveys++;
            progress.style.leveys = leveys + '%'; 
            progress.innerHTML = leveys * 1  + '%';
        }
    }
}
*/
