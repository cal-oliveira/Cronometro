let playBtn = document.getElementById('play').innerText = 'Play'
let timer = document.getElementById('timer').innerText = '00:00'

let seconds = 0
let auxSec = 0
let minutes = 0
let auxMin = 0

let started = false
let paused = false

let cronometer

function play_pause(){

    if(started == false){

        started = true
        sec = 0
        cronometer = setInterval(()=>{
            seconds++
            document.getElementById('timer').innerText = (minutes < 10 ? '0' : '') + (seconds > 59 ? minutes++ && minutes : minutes) + ':' + 
            (seconds > 59 ? seconds = 0 : seconds < 10 ? '0' + seconds : seconds)
        },1000)
    
    } else {
    
        if(paused == false){

            paused = true
            clearInterval(cronometer)

        } else {

            paused = false
            cronometer = setInterval(()=>{
                seconds++
                document.getElementById('timer').innerText = (minutes < 10 ? '0' : '') + (seconds > 59 ? minutes++ && minutes : minutes) + ':' + 
                (seconds > 59 ? seconds = 0 : seconds < 10 ? '0' + seconds : seconds)
            },1000)

        }

    }

    if(paused === false){
        document.getElementById('play').innerText = 'Pause'
    } else {
        document.getElementById('play').innerText = 'Play'
    }
    
}

function stopTimer(){
    
    started = false
    paused = false

    seconds = 0
    minutes = 0 

    document.getElementById('play').innerText = 'Play'
    document.getElementById('timer').innerText = '00:00'

    clearInterval(cronometer)
   
}
