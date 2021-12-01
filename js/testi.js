let progressPercent = 0
let questionNumber = 1

let first = random(1, 100)
let second = random(1, 100)

let correct = first + second


function start(){

        document.getElementById("question").textContent = first + " + " + second

        document.getElementById("option1").textContent = correct
        document.getElementById("option2").textContent = random(1,100)
        document.getElementById("option3").textContent = random(1,100)
        document.getElementById("option4").textContent = random(1,100)

}

function random(min, max){
   return Math.floor(Math.random() * max) + min;
}


function test(){
        first = random(1, 100)
        second = random(1, 100)
        correct = first + second
       

        progressPercent += 20
        questionNumber += 1
        document.getElementById("progress").style.width = progressPercent + '%'
        document.getElementById("progress").textContent = progressPercent + '%'
        document.getElementById("questionNumber").textContent = questionNumber
        document.getElementById("question").textContent = first + " + " + second


        document.getElementById("option1").textContent = correct
        document.getElementById("option2").textContent = random(1, 100)
        document.getElementById("option3").textContent = random(1, 100)
        document.getElementById("option4").textContent = random(1, 100)


        

    if(questionNumber > 5){
        document.getElementById("questionNumber").textContent = "5"
        document.getElementById("progress").style.width = "100%"
        document.getElementById("progress").textContent = "100%"
        document.getElementById("complete").style.display = "block"
    }
    
}

 