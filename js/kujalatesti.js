focus
var minimum = 1;
var maximum = 50;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) - minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) - minimum;
document.getElementById('question').innerHTML = int1 + " " + "-" + " " + int2;
var qanswer = int1 - int2;

function calculate() {
  var uanswer = document.getElementById('answer').value;
  if (uanswer == qanswer) {
    alert("Oikein");


  } else {
    alert("Väärin")
  }
  location.reload();
}
