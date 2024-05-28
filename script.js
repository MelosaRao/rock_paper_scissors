let humanScore = 0;
let computerScore = 0;
document.getElementById('endScreen').style.display = 'none'

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice(){
    let arr = ["rock","paper","scissor"];
    return arr[getRandomIntInclusive(0,2)];
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const displaytext = document.querySelector("#display_text");
const humdis = document.querySelector("#humanchoice");
const compdis = document.querySelector("#computerchoice");
const compscore = document.querySelector("#compscore");
const humanscore = document.querySelector("#humanscore");
const txtEndMessage = document.getElementById('txtEndMessage');

rock.addEventListener("click", () => playRound("rock",getComputerChoice()));
paper.addEventListener("click", () => playRound("paper",getComputerChoice()));
scissor.addEventListener("click", () => playRound("scissor",getComputerChoice()));


function replay(){
    location.reload();
}

function playRound(humanChoice, computerChoice){


    humdis.textContent = `Your choice : ${humanChoice}`
    compdis.textContent = `Computer choice : ${computerChoice}`

    if(humanChoice==="rock"){
        if(computerChoice === "paper"){
            displaytext.textContent= "You lose : rock loses to paper";
            ++computerScore;
        }

        else if(computerChoice === "scissor"){displaytext.textContent="You win : rock beats scissor";
            ++humanScore;
        }

        else if(computerChoice === "rock"){displaytext.textContent="Tie!";}
    }

    if(humanChoice==="paper"){
        if(computerChoice === "scissor"){displaytext.textContent ="You lose : paper loses to scissor";
            ++computerScore;
        }

        else if(computerChoice === "rock"){displaytext.textContent="You win : rock beats paper";
            ++humanScore;
        }

        else if(computerChoice === "paper"){displaytext.textContent="Tie!";}
    }

    if(humanChoice==="scissor"){
        if(computerChoice === "rock"){displaytext.textContent= "You lose : scissor loses to rock";
            ++computerScore;
        }

        else if(computerChoice === "paper"){displaytext.textContent = "You win : scissor beats paper";
            ++humanScore;
        }

        else if(computerChoice === "scissor"){displaytext.textContent = "Tie!";}
    }

    humanscore.textContent = `Your score : ${humanScore}`;
    compscore.textContent = `Computer score : ${computerScore}`;

    if(humanScore>=5){
        displaytext.textContent = "You won the game"
        txtEndMessage.textContent = 'YOU WIN';
        document.getElementById('endScreen').style.width = '100%';
        document.getElementById('endScreen').style.height = '100%';
        document.getElementById('endScreen').style.display = 'block';
 
    }

    if(computerScore>=5){
        displaytext.textContent = "You lost the game"
        txtEndMessage.textContent = 'YOU LOSE';
        document.getElementById('endScreen').style.width = '100%';
        document.getElementById('endScreen').style.height = '100%';
        document.getElementById('endScreen').style.display = 'block';
        
    }


}


