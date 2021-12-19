//Juho Ahonen

//Muuttujat ja elementeille kuuntelijat
let results = new Array;
let correctAnswers = 0;
let currentSolution = 0;
let counter  = 1;
let fillProgress = 0;
let howManyDone = 0;
let progressBar = document.getElementById("filler")
let quizCounter = document.getElementById("quizcounter")

let check = document.getElementById("check")
check.addEventListener("click", calculate)
let answerCheck = document.getElementById("answercheck")


let nextProblem = document.getElementById("nextproblem")
nextProblem.addEventListener("click", nextMathProblem)
let answer = document.getElementById("answer")

document.getElementById("startbutton").addEventListener("click", startMathQuiz)

let resultsButton = document.getElementById("showresults")
resultsButton.addEventListener("click", showResults)

//Random number generator
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(9999);
  return Math.floor(Math.random() * (max - min) + min);
}

//Arpoo luvut ja luo matemaattisen lauseen
function mathProblem() {
  let int1 = getRandomInt()
  let int2 = getRandomInt()
  let sentence = int1 + " + " + int2;
  document.getElementById("mathproblem").innerHTML = sentence;
  nextProblem.disabled = true;
  return currentSolution = int1 + int2;
}

//Tarkistetaan onko vastaus annettu numeroina ja onko se oikein => tulostetaan viesti
function calculate() {
  let studentsAnswer = Number(document.getElementById("answer").value);

  if (studentsAnswer == "") {
    answerCheck.innerHTML = "Vastaa tehtävään ennen tarkistusta! <br> Syötä vain numeroita."
    return;
  }

  if (studentsAnswer == currentSolution) {
    answerCheck.innerHTML = "Vastaus on oikein";
    answerCheck.classList.add("green")
    correctAnswers++
  } else {
    answerCheck.classList.add("red")
    answerCheck.innerHTML = "Vastaus on väärin! Oikea vastaus on: " + currentSolution;
  }

  //Progressbarin täyttö
  check.disabled = true;
  howManyDone = howManyDone + 1;
  fillProgress = fillProgress + 20;
  progressBar.style.width = fillProgress + "%";
  progressBar.innerHTML = howManyDone + "/5";
  quizCounter.innerHTML = howManyDone + "/5";

  //Lisätään matemaattinen lause, oikea vastaus ja syötetty vastaus taulukkoon lopullista tulostusta varten
  document.getElementById("answer").readOnly = true;
  let mathQuestion = document.getElementById("mathproblem").innerHTML;
  results.push(counter + ". " + mathQuestion + " = " + currentSolution + ". " + "Vastauksesi : " + studentsAnswer);
  nextProblem.disabled = false;
  counter++;

  if (counter == 6) {
    nextProblem.style.display = "none"
    resultsButton.style.display = "inline-block"
  }
}

//Tyhjennystä uuden tehtävän lisäämiksesi
function nextMathProblem() { 
  answerCheck.classList.remove("red")
  answerCheck.classList.remove("green")
  answerCheck.innerHTML = "&nbsp"
  answer.value = ""
  document.getElementById("answer").readOnly = false;
  check.disabled = false;
  mathProblem()
}


//Tulostetaan lopulliset vastaukset
function showResults() {
  document.getElementById("answercontent").classList.add("hidden")
  document.getElementById("answercontent").classList.add("visuallyhidden")
  document.getElementById("result").classList.add("showAnimation")
  document.getElementById("results").style.display = "block"
  let resultBox = document.getElementById("resultsbox");
  
  for (let i = 0; i < results.length; i++) {
    setTimeout(() => {
      let li = document.createElement("li");
      li.classList.add("showAnimation")
      li.innerHTML = results[i];
      resultBox.appendChild(li)
   }, 500 * i)
  }


    setTimeout(() => {
      let refresh = document.getElementById("refresh");
      refresh.classList.add("showAnimation");
      refresh.style.visibility = "visible"
      refresh.addEventListener("click", function () {
        document.location.reload(true);
      })
  
    }, 2500);


}


//Testin aloitus
function startMathQuiz() {
  document.getElementById("buttondiv").classList.add("hidden")
  document.getElementById("buttondiv").classList.add("visuallyhidden")
  document.getElementById("quizcontent").classList.add("showAnimation")
  document.getElementById("quizcontent").style.display = "block"
  
  mathProblem()
}