// "use strict";
// let [computer_score,user_score]=[0,0];
// let result_ref = document.getElementById("result");
// let choices_object = {
//     'rock' : {
//         'rock' : 'draw',
//         'scissor' : 'win',
//         'paper' : 'lose'
//     },
//     'scissor' : {
//         'rock' : 'lose',
//         'scissor' : 'draw',
//         'paper' : 'win'
//     },
//     'paper' : {
//         'rock' : 'win',
//         'scissor' : 'lose',
//         'paper' : 'draw'
//     }

// }

// function checker(input){
//     var choices = ["rock", "paper", "scissor"];
//     var num = Math.floor(Math.random()*3);

//     document.getElementById("comp_choice").innerHTML = 
//     ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

//     document.getElementById("user_choice").innerHTML = 
//     ` You choose <span> ${input.toUpperCase()} </span>`;
//     let computer_choice = choices[num];

//     switch(choices_object[input][computer_choice]){
//         case 'win':
//             result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
//             result_ref.innerHTML = "YOU WIN";
//             user_score++;
//             break;
//         case 'lose':
//             result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
//             result_ref.innerHTML = "YOU LOSE";
//             computer_score++;
//             break;
//         default:
//             result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
//             result_ref.innerHTML = "DRAW";
//             break;
//     }

//     document.getElementById("computer_score").innerHTML = computer_score;
//     document.getElementById("user_score").innerHTML = user_score;
// }

"use strict";
const compScoreEl = document.getElementById("computer_score");
const userScoreEl = document.getElementById("user_score");
const userChoiceEl = document.getElementById("user_choice");
const compChoiceEl = document.getElementById("comp_choice");
const resultEl = document.getElementById("result");

let[compScore, userScore]  =[0,0];
let choices =["rock", "paper", "scissors","lizard", "spock"];
let choices_object = {
    rock : {
        rock : 'draw',
        scissor : 'win',
        paper : 'lose',
        lizard : 'win',
        spock : 'lost'
    },
    scissor : {
        rock : 'lose',
        scissor : 'draw',
        paper : 'win',
        lizard : 'win',
        spock : 'lose'
    },
    paper : {
        rock : 'win',
        scissor : 'lose',
        paper : 'draw',
        lizard : 'lost',
        spock : 'win'
    },

    lizard : {
        rock : 'lose',
        scissor : 'lose',
        paper : 'win',
        lizard : 'draw',
        spock : 'win'
    },

    spock : {
        rock : 'win',
        scissor : 'win',
        paper : 'lose',
        lizard : 'lose',
        spock : 'draw'
    }
}

const game = function(input){
let randomChoice = Math.floor(Math.random()*5);
let comp_choice = choices[randomChoice];
compChoiceEl.innerHTML =`computer choose <span>${comp_choice}</span>`;
userChoiceEl.innerHTML = `you choose <span>${input}</span>`;

switch(choices_object[input][comp_choice]){
        case 'win':
            resultEl.style.cssText = "background-color: #cefdce; color: #689f38";
            resultEl.innerHTML = "YOU WIN";
            userScore++;
            break;
        case 'lose':
            resultEl.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            resultEl.innerHTML = "YOU LOSE";
            compScore++;
            break;
        case 'draw':
            resultEl.style.cssText = "background-color: #e5e5e5; color: #808080";
            resultEl.innerHTML = "DRAW";
        break;
    }
        userScoreEl.innerText = userScore;
        compScoreEl.innerText = compScore;
};