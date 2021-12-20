//Muuttujat kysymyksille ja vastausinputeille. Olisi voinut laittaa arrayhyn.
let question1n1 = rng(1, 10);
let question1n2 = rng(1, 10);
let question2n1 = rng(1, 10);
let question2n2 = rng(1, 10);
let question3n1 = rng(1, 10);
let question3n2 = rng(1, 10);
let question4n1 = rng(1, 10);
let question4n2 = rng(1, 10);
let question5n1 = rng(1, 10);
let question5n2 = rng(1, 10);

let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");

let answer1 = document.getElementById("answ1");
let answer2 = document.getElementById("answ2");
let answer3 = document.getElementById("answ3");
let answer4 = document.getElementById("answ4");
let answer5 = document.getElementById("answ5");
//Kysymyksille joutui laittamaan omat muuttujat Random number generaatorilla
//sillä jos tähän olisi laittanut vain RNG * RNG, kaikissa kysymyksissä olisi ollut samat luvut.
//Ehkä olisi ollut parempikin tapa?
question1.innerHTML = question1n1 + "*" + question1n2;
question2.innerHTML = question2n1 + "*" + question2n2;
question3.innerHTML = question3n1 + "*" + question3n2;
question4.innerHTML = question4n1 + "*" + question4n2;
question5.innerHTML = question5n1 + "*" + question5n2;

let answerComment = document.getElementById("answerComment");
let tryAgainText = document.querySelector(".text-block3");
//Points muuttuja kasvaa oikeasta vastauksesta ja lopussa annetaan ilmoitus pisteiden määrästä riippuen. 
let points = 0;

let buttonAnswers = document.getElementById("rightAnswers");
let buttonTryAgain = document.getElementById("tryAgain");
//Nappia painamalla tarkistetaan vastaukset
buttonAnswers.addEventListener("click", answers);
//Iffillä Katsotaan onko vastaus oikein vai väärin ja lähetetään ilmoitus. Lopussa piilotetaan "Näytä vastaukset" nappi ja näytetään "yritä uudelleen" nappi.
//Tämän jälkeen haetaan funktiota joka lataa sivun uudelleen painamalla yritä uudelleen nappia.
function answers() {
    points = 0;
    tryAgainText.style.display = "block";
    if (answer1.value == question1n1 * question1n2) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Oikein meni!";
        points++
    } else {
        document.getElementById("result").style.color = "#e21d21";
        document.getElementById("result").innerHTML = "Yritä uudelleen.";

    } if (answer2.value == question2n1 * question2n2) {
        document.getElementById("result2").style.color = "green";
        document.getElementById("result2").innerHTML = "Oikein meni!";
        points++
    } else {
        document.getElementById("result2").style.color = "#e21d21";
        document.getElementById("result2").innerHTML = "Yritä uudelleen.";

    } if (answer3.value == question3n1 * question3n2) {
        document.getElementById("result3").style.color = "green";
        document.getElementById("result3").innerHTML = "Oikein meni!";
        points++
    } else {
        document.getElementById("result3").style.color = "#e21d21";
        document.getElementById("result3").innerHTML = "Yritä uudelleen.";

    } if (answer4.value == question4n1 * question4n2) {
        document.getElementById("result4").style.color = "green";
        document.getElementById("result4").innerHTML = "Oikein meni!";
        points++
    } else {
        document.getElementById("result4").style.color = "#e21d21";
        document.getElementById("result4").innerHTML = "Yritä uudelleen.";

    } if (answer5.value == question5n1 * question5n2) {
        document.getElementById("result5").style.color = "green";
        document.getElementById("result5").innerHTML = "Oikein meni!";
        points++
    } else {
        document.getElementById("result5").style.color = "#e21d21";
        document.getElementById("result5").innerHTML = "Yritä uudelleen.";
        //Pisteiden mukaan ilmoitus käyttäjälle miten tehtävät meni.
        } if (points == 5) {
            answerComment.style.color = "green";
            answerComment.innerHTML = "Vau! Kaikki oikein! Haluatko yrittää uudelleen?"
        } if (points >= 2 && points < 5) {
            answerComment.style.color = "yellow";
            answerComment.innerHTML = "Osa väärin. Yrittäisitkö uudelleen?";
        } if (points < 2) {
            answerComment.style.color = "#e21d21";
            answerComment.innerHTML = "Tarvitset vielä hieman harjoitusta. Yritä uudelleen!";
        }
        //Piilotetaan näytä vastaukset nappi ja näytetään yritä uudelleen nappi
        buttonAnswers.style.display = "none";
        buttonTryAgain.style.display = "block";
        //Yritä uudelleen nappia painamalla ajetaan funktio "again" joka päivittää sivun.
        buttonTryAgain.addEventListener("click", again);
}

function again() {
    location.reload();
}
//Random number generator
function rng(min, max) {
    return Math.floor(Math.random() * max) + min;
}