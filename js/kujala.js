//tekemättömien tehtävien määrä ja sen tulostus sille kuuluvaan elementtiin
let counter = 5;
document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";

//oikeiden vastausten määrä
let correctanswrs = 0;

//laskut luodaan näiden muuttujien avulla
var minimum = 1;
var maximum = 50;

//ensimmäinen lasku
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
document.getElementById('question').innerHTML = int1 + " " + "-" + " " + int2 + " ?";
var qanswer = int1 - int2;

//newquestion luo uuden laskun ensimmäisen laskun jälkeen
function newquestion() {
  var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
  var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
  document.getElementById('question').innerHTML = int1 + " " + "-" + " " + int2 + " ?";
  qanswer = int1 - int2;
}
//funktio tarkistaa onko syötetty vastaus oikein ja päivittää vastausten määrän
function calculate() {
  var uanswer = document.getElementById('answer').value;
  //Jos tehtäviä ei ole jäljellä lasku kenttä muutetaan ja näytetään oikeiden vastausten määrä
  if (counter <= 1) {
    document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä 0/5";
    document.getElementById("question").innerHTML = "Vastasit kaikkiin kysymyksiin";
    document.getElementById("correctanswers").innerHTML = "Sait oikein " + correctanswrs;
    return
  }
  //jos vastaus on oikein oikeisiin vastauksiin lisätään 1 ja result kenttään tulostetaan teksti oikein
  if (uanswer == qanswer) {
    correctanswrs = correctanswrs + 1;
    document.getElementById("result").style.color = "lawngreen";
    document.getElementById("result").innerHTML = "Oikein!";
  }
  //jos vastaus on väärin tulostetaan teksti jossa sanotaan väärin ja kerrotaan oikea vastaus
  if (uanswer != qanswer) {
    document.getElementById("result").style.color = "firebrick";
    document.getElementById("result").innerHTML = "Väärin! Oikea vastaus oli " + qanswer;
  }
  //tehtävien määrästä vähennetään yksi, kutsutaan newquestion funktiota, input kenttä tyhjätään ja sille annetaan focus
  counter = counter - 1;
  document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";
  newquestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
}

//funktio yritä uudestaan napille joka lataa sivun uudestaan
function reloadpage() {
  location.reload();
}