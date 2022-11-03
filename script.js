let check = document.querySelector('#check')
let btnRefresh = document.querySelector('.btnRefresh')
var p = 0;


let sorteio = Math.floor(Math.random()* 20) + 1
console.log(sorteio)
document.querySelector('#guessNumber').value;
document.querySelector('.randomNumber').innerHTML = '?';
document.querySelector('.randomNumber').style.color = 'red'


var win = 0;
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
        win = sorteio;
        document.querySelector('.randomNumber').innerHTML = sorteio;

         answer.innerHTML = "Congrats!! you won!🤩🙌✨"
       document.querySelector('.randomNumber').style.color = 'red'
        
    }else if((guessNumber >= 1 || guessNumber <= 5) && sorteio > 16){
        answer.innerHTML = "🥶It's too cold,try a higher number";
    }else if((guessNumber >= 1 || guessNumber <= 5) && (sorteio > 12 || sorteio < 17)){
        answer.innerHTML = "🥶It's too cold yet,try a higher number";
    }else if((guessNumber >= 1 || guessNumber <= 5) && (sorteio > 8 || sorteio < 13)){
        answer.innerHTML = "🙂It's getting warm,try a higher number";
    }else if((guessNumber >= 1 || guessNumber <= 5) && (sorteio > 4 || sorteio < 9)){
        answer.innerHTML = "😎It's warm,try a higher number";
    }else if((guessNumber >= 1 || guessNumber <= 5) && (sorteio > 0 || sorteio < 5)){
        answer.innerHTML = "🥵It's too hot,you are about to get it";
    
}else if((guessNumber >= 6 || guessNumber <= 10) && sorteio > 16){
    answer.innerHTML = "🥶It's too cold,try a higher number";
}else if((guessNumber >= 6 || guessNumber <= 10) && (sorteio > 12 || sorteio < 17)){
    answer.innerHTML = "🥶It's too cold yet,try a higher number";
}else if((guessNumber >= 6 || guessNumber <= 10) && (sorteio > 8 || sorteio < 13)){
    answer.innerHTML = "🙂It's getting warm,try a higher number";
}else if((guessNumber >= 6 || guessNumber <= 10) && (sorteio > 4 || sorteio < 9)){
    answer.innerHTML = "😎It's warm,try a higher number";
}else if((guessNumber >= 6 || guessNumber <= 10) && (sorteio > 0 || sorteio < 5)){
    answer.innerHTML = "🥵It's too hot,you are about to get it";
}

else if((guessNumber >= 11 || guessNumber <= 15) && sorteio > 16){
    answer.innerHTML = "🥶It's too cold,try a higher number";
}else if((guessNumber >= 11 || guessNumber <= 15) && (sorteio > 12 || sorteio < 17)){
    answer.innerHTML = "🥶It's too cold yet,try a higher number";
}else if((guessNumber >= 11 || guessNumber <= 15) && (sorteio > 8 || sorteio < 13)){
    answer.innerHTML = "🙂It's getting warm,try a higher number";
}else if((guessNumber >= 11 || guessNumber <= 15) && (sorteio > 4 || sorteio < 9)){
    answer.innerHTML = "😎It's warm,try a higher number";
}else if((guessNumber >= 11 || guessNumber <= 15) && (sorteio > 0 || sorteio < 5)){
    answer.innerHTML = "🥵It's too hot,you are about to get it";
}

else if((guessNumber >= 16 || guessNumber <= 20) && sorteio > 16){
    answer.innerHTML = "🥶It's too cold,try a higher number";
}else if((guessNumber >= 16 || guessNumber <= 20) && (sorteio > 12 || sorteio < 17)){
    answer.innerHTML = "🥶It's too cold yet,try a higher number";
}else if((guessNumber >= 16 || guessNumber <= 20) && (sorteio > 8 || sorteio < 13)){
    answer.innerHTML = "🙂It's getting warm,try a higher number";
}else if((guessNumber >= 16 || guessNumber <= 20) && (sorteio > 4 || sorteio < 9)){
    answer.innerHTML = "😎It's warm,try a higher number";
}else if((guessNumber >= 16 || guessNumber <= 20) && (sorteio > 0 || sorteio < 5)){
    answer.innerHTML = "🥵It's too hot,you are about to get it";
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
        if(p <= 30 && win === sorteio){
            p = 0;
            clearInterval(timer)
        } else if (p === 30){
            document.querySelector('#answer').innerHTML = "Game Over"
            p = 0;
            clearInterval(timer)
        }
}   
    
    



check.addEventListener('click',play)
btnRefresh.addEventListener('click',refresh)
setInterval(timer, 1000)
