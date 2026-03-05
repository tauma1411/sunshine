let timer
let timeLeft = 0
let running = false

const timerDisplay = document.getElementById("timer")
const message = document.getElementById("message")
const music = document.getElementById("music")
const playPauseBtn = document.getElementById("playPause")

function updateDisplay(){

let minutes = Math.floor(timeLeft / 60)
let seconds = timeLeft % 60

seconds = seconds < 10 ? "0" + seconds : seconds

timerDisplay.textContent = minutes + ":" + seconds

}

function startStudy(){

let study = document.getElementById("studyTime").value

timeLeft = study * 60

message.textContent = "📚 Bons estudos!"

updateDisplay()

}

function startBreak(){

let rest = document.getElementById("breakTime").value

timeLeft = rest * 60

message.textContent = "☕ Hora do descanso"

updateDisplay()

}

function toggleTimer(){

if(!running){

startTimer()

}else{

pauseTimer()

}

}

function startTimer(){

running = true

playPauseBtn.textContent = "⏸"

music.play().catch(()=>{})

timer = setInterval(()=>{

if(timeLeft <= 0){

clearInterval(timer)

running = false

playPauseBtn.textContent = "▶"

music.pause()

message.textContent = "⏰ Tempo finalizado!"

return

}

timeLeft--

updateDisplay()

},1000)

}

function pauseTimer(){

running = false

playPauseBtn.textContent = "▶"

clearInterval(timer)

music.pause()

}

function resetTimer(){

clearInterval(timer)

running = false

music.pause()

playPauseBtn.textContent = "▶"

let study = document.getElementById("studyTime").value

timeLeft = study * 60

updateDisplay()

message.textContent = ""

}

window.onload = ()=>{

let study = document.getElementById("studyTime").value

timeLeft = study * 60

updateDisplay()

}