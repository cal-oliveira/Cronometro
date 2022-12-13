let playBtn = document.getElementById('play').innerText = 'Play'
let timer = document.getElementById('timer').innerText = '00:00'

let sec = 0
let auxSec = 0
let min = 0
let auxMin = 0

let p0 
let p1 
let p2
let p3 
let p4

function play_pause(){

    p1 = setInterval(()=>{
        auxMin++
    },600000)
    
    p2 = setInterval(()=>{
        min++
    },60000)
    
    p3 = setInterval(()=>{
        auxSec++
    },10000)
    
    p4 = setInterval(()=>{
        sec++
    },1000)
    
    /** */

    p0 = setInterval(()=>{
        document.getElementById('timer').innerText = `${auxMin > 5 ? auxMin = 0 : auxMin}${min > 9 ? min = 0 : min}:${auxSec > 5 ? auxSec = 0 : auxSec}${sec > 9 ? sec = 0 : sec}`
    },1000)
    
}

function stopTimer(){
    
    clearInterval(p0)
    clearInterval(p1)
    clearInterval(p2)
    clearInterval(p3)
    clearInterval(p4)

}
