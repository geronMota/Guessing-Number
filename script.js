 
let check = document.querySelector('#check')
let btnRefresh = document.querySelector('.btnRefresh')
let p = 0;


let sorteio = Math.floor(Math.random()* 20) + 1
console.log(sorteio)
document.querySelector('.randomNumber').innerHTML = sorteio
document.querySelector('.randomNumber').style.color = "white";

function play(){
    
    let randomNumber = document.querySelector('.randomNumber').innerText
    let guessNumber = parseInt(document.querySelector('#guessNumber').value)
    let answer = document.querySelector('#answer')
    let guNumber = document.querySelector('#guessedNumbers')
    let nofguess = document.querySelector('#numberOfGuesses')

    
    if(guessNumber < 1 || guessNumber > 20){
        alert("please,type a number between 1 and 20")
    }
    else if(guessNumber === sorteio){
        
         answer.innerHTML = "Congrats!! you won!🤩🙌✨"
       document.querySelector('.randomNumber').style.color = 'red'
        
    }else if(guessNumber < sorteio){
        answer.innerHTML = "🥶 The number is low";
    }else if(guessNumber > sorteio){
        answer.innerHTML = "🥵 The number is high";
    }
    
}

function refresh(){
   location.reload() = document.querySelector('.randomNumber')
    document.querySelector('#guessNumber').innerHTML = ""

}

function timer(){
    let score = document.querySelector('#pontos')
    
      p++
         score.innerHTML = p; 
         if(p === 30){
            document.querySelector('#answer').innerHTML = "Game Over"
            p = 0;
            clearInterval(timer)
        }
    }   
    
    



check.addEventListener('click',play)
btnRefresh.addEventListener('click',refresh)
setInterval(timer, 1000)
