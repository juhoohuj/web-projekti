

//tehtyjen tehtävien määrä
let counter = 5;
document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";

let correctanswrs = 0;

var minimum = 1;
var maximum = 20;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
document.getElementById('question').innerHTML = int1 + " " + "-" + " " + int2 + " ?";
var qanswer = int1 - int2;

function newquestion(){
  var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
  var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + 1;
  document.getElementById('question').innerHTML = int1 + " " + "-" + " " + int2 + " ?";
  qanswer = int1 - int2;
}

function calculate() {
  var uanswer = document.getElementById('answer').value;
  if(counter <= 1){
    document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä 0/5";
    document.getElementById("question").innerHTML = "Vastasit kaikkiin kysymyksiin";
    document.getElementById("correctanswers").innerHTML = "Sait oikein " + correctanswrs;
    return
  }
  if (uanswer == qanswer) {
    correctanswrs = correctanswrs + 1;
    document.getElementById("result").style.color = "lawngreen";
    document.getElementById("result").innerHTML = "Oikein!";
  }

   if(uanswer != qanswer) {
    document.getElementById("result").style.color = "firebrick";
    document.getElementById("result").innerHTML = "Väärin! Oikea vastaus oli " + qanswer;
  }
  counter = counter - 1;
  document.getElementById("counter").innerHTML = "Kysymyksiä jäljellä " + counter + "/5";
  newquestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
}

function reloadpage(){
  location.reload();
}