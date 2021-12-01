let progressPercent = 0


function test(){
    progressPercent += 10
    document.getElementById("progress").style.width = progressPercent + '%'
    document.getElementById("progress").textContent = progressPercent + '%'
}

 