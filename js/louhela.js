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
//Satunnaisen numeron arvonta
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
}
//Satunniasen numeron arvonta kahdella desimaalilla
function randomWithDecimal() {
    let precision = 100;
    let randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    return randomnum
}
//Aloitus funkito kun sivu on ladattu
function start() {
    //Vastaustila asetetaan falseksi eli käyttäjä ei ole vastannut tämän hetkiseen kysymykseen. 
    answered = false;
    questionNumber = 1
    progressPercent = 0
    score = 0
    progress.style.width = "0%"
    progress.textContent = "0%"
    //Tulos- ja alustapainikkeet pillotetaan.
    document.getElementById("result").style.display = "none"
    document.getElementById("restart").style.display = "none"
    document.getElementById("question").textContent = first + " / " + second
    //Arvotaan vastauspainikkeisiin vastausvaihtoehdot
    option[0].textContent = randomWithDecimal()
    option[1].textContent = randomWithDecimal()
    option[2].textContent = randomWithDecimal()
    option[3].textContent = randomWithDecimal()
    //Satunnaisesti valittuun vastauspainikkeeseen asetetaan oikean vastauksen arvo
    option[random(0, 4)].textContent = correct
}
//Vastauksen tarkistaminen
function check(answerID) {
    if (answered == false) {
        let answer = document.getElementById(answerID)
        document.getElementById("next").style.display = "inline"
        //Jos vastaus on oikein asetetaan vastauspainikkeen luokaksi btn-success ja tulokseen lisätään piste jos vastaus väärin luokaksi btn-danger
        if (answer.textContent == correct) {
            answer.classList.toggle('btn-success');
            score++
        } else {
            answer.classList.toggle('btn-danger');
        }
        answered = true;
    }
}
//Seuraava kysymys
function next() {
    //Vastaustila asetetaan falseksi.
    answered = false;
    //Piilotetaan painike jolla siirrytään seuraavaan kysymykseen
    document.getElementById("next").style.display = "none"
    //Vastauspainikkeista poistetaan tyylit
    option[0].classList.remove("btn-success")
    option[0].classList.remove("btn-danger")

    option[1].classList.remove("btn-success")
    option[1].classList.remove("btn-danger")

    option[2].classList.remove("btn-success")
    option[2].classList.remove("btn-danger")

    option[3].classList.remove("btn-success")
    option[3].classList.remove("btn-danger")
    //Uusi kysymys
    newQuestion()
}


function newQuestion() {
    //Jos käyttäjä on vastannut viiteen kysymykseen tuodaan esille painike jolla voidaan aloittaa tehtävät alusta ja sekä tuodaan esille oikein menneiden vastausen määrä
    if (questionNumber == 5) {
        document.getElementById("restart").style.display = "inline"
        progress.style.width = "100%"
        progress.textContent = "100%"
        document.getElementById("result").style.display = "block"
        document.getElementById("result").textContent = "Tuloksesi: " + score
        answered = true;
        //Arvotaan uudet numerot uuteen kysymykseen
    } else {
        first = random(1, 100)
        second = random(1, 100)
        correct = Math.round(first / second * 100) / 100
        //edistymispalkki etenee 20% ja kysymysnumero kasvaa yhdellä
        progressPercent += 20
        questionNumber += 1
        progress.style.width = progressPercent + '%'
        progress.textContent = progressPercent + '%'
        document.getElementById("questionNumber").textContent = questionNumber
        //Asetetaan arvotut numerot uuteen kysymyksen
        document.getElementById("question").textContent = first + " / " + second
        //Vastauspainikkeisiin arvotaan vastausvaihtoehdot
        option[0].textContent = randomWithDecimal()
        option[1].textContent = randomWithDecimal()
        option[2].textContent = randomWithDecimal()
        option[3].textContent = randomWithDecimal()
        //Satunnaisesti vailittuun vastauspainikkeeseen asetetaan arvoksi oikea vastaus
        option[random(0, 4)].textContent = correct
    }
}