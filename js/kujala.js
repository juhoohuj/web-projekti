//globaalit muuttujat
let answer = 0;
let counter = 5;
let correct = 0;
//tehtävien määrä asetetaan aluksi 5/5
document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";
//question funktio suoritetaan sivun ladatessa
window.onload = question();

//luo kysymyksen ja päivittää vastauksen
function question() {
  let num1 = getRandomInt();
  let num2 = getRandomInt();
  let question = num1 + " - " + num2 + "?"
  document.getElementById("question").innerHTML = question;
  Number(answer = num1 - num2);
}

//tarkistaa input kenttään syötetyn vastauksen ja antaa tuloksen
function calculate() {
  let qanswer = document.getElementById("answer").value;
  if (isNaN(qanswer) && counter > 1) {
    document.getElementById("result").innerHTML = "Vastauksen täytyy olla numero";
    document.getElementById("result").style.color = "Red";
    return
  }
  if(qanswer === "" && counter > 1){
    document.getElementById("result").innerHTML = "Vastaa kysymykseen ensin!";
    document.getElementById("result").style.color = "Red";
  return
  }
  if (qanswer == answer && counter > 1) {
    correct++;
    document.getElementById("result").innerHTML = "Oikein";
    document.getElementById("result").style.color = "green";
  }
  if (qanswer != answer) {
    document.getElementById("result").innerHTML = "Väärin! Oikea vastaus oli " + answer;
    document.getElementById("result").style.color = "Red";
  }
  if (counter <= 1) {
    counter = 0;
    document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";
    document.getElementById("question").innerHTML = "Vastasit kaikkiin kysymyksiin!";
    document.getElementById("correctanswers").innerHTML = "Sait oikein " + correct + "/5";
    document.getElementById("answer").value = "";
    return
  }
  counter--;
  document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
  question();
}

//arpoo numeron 1-100 väliltä
function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

//funktio yritä uudestaan napille joka lataa sivun uudestaan
function reloadpage() {
  location.reload();
}