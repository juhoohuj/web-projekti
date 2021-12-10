let progressPercent = 0
let questionNumber = 1
let answered = false;

let score = 0
let first = random(1, 100)
let second = random(1, 100)
let correct = Math.round(first / second * 100) / 100

let progress = document.getElementById("progress");
let option = [document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
]

function random(min, max) {
    return Math.floor(Math.random() * max) + min;
}


function randomWithDecimal() {
    let precision = 100;
    let randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    return randomnum
}

function start() {
    answered = false;
    questionNumber = 1
    progressPercent = 0
    score = 0

    document.getElementById("result").style.display = "none"
    document.getElementById("restart").style.display = "none"
    document.getElementById("question").textContent = first + " / " + second

    option[0].textContent = randomWithDecimal()
    option[1].textContent = randomWithDecimal()
    option[2].textContent = randomWithDecimal()
    option[3].textContent = randomWithDecimal()

    option[random(0, 4)].textContent = correct
}

function check(id) {
    if (answered == false) {
        let answer = document.getElementById(id)
        document.getElementById("next").style.display = "inline"

        if (answer.textContent == correct) {
            answer.classList.toggle('btn-success');
            score++
        } else {
            answer.classList.toggle('btn-danger');
        }
        answered = true;
    }
}

function next() {
    answered = false;

    document.getElementById("next").style.display = "none"

    option[0].classList.remove("btn-success")
    option[0].classList.remove("btn-danger")

    option[1].classList.remove("btn-success")
    option[1].classList.remove("btn-danger")

    option[2].classList.remove("btn-success")
    option[2].classList.remove("btn-danger")

    option[3].classList.remove("btn-success")
    option[3].classList.remove("btn-danger")

    newQuestion()
}


function newQuestion() {
    if (questionNumber > 4) {
        document.getElementById("restart").style.display = "inline"
        progress.style.width = "100%"
        progress.textContent = "100%"
        document.getElementById("result").style.display = "block"
        document.getElementById("result").textContent = "Tuloksesi: " + score
        answered = true;
    } else {
        first = random(1, 100)
        second = random(1, 100)
        correct = Math.round(first / second * 100) / 100

        progressPercent += 20
        questionNumber += 1
        progress.style.width = progressPercent + '%'
        progress.textContent = progressPercent + '%'
        document.getElementById("questionNumber").textContent = questionNumber
        document.getElementById("question").textContent = first + " / " + second

        option[0].textContent = randomWithDecimal()
        option[1].textContent = randomWithDecimal()
        option[2].textContent = randomWithDecimal()
        option[3].textContent = randomWithDecimal()

        option[random(0, 4)].textContent = correct
    }
}