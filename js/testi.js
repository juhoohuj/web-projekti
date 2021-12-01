let progressPercent = 0
let questionNumber = 1


function test(){
        progressPercent += 20
        questionNumber += 1
        document.getElementById("progress").style.width = progressPercent + '%'
        document.getElementById("progress").textContent = progressPercent + '%'
        document.getElementById("questionNumber").textContent = questionNumber
    if(questionNumber > 5){
        document.getElementById("questionNumber").textContent = "5"
        document.getElementById("progress").style.width = "100%"
        document.getElementById("complete").style.display = "block"
    }
    
}

 