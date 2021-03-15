const game = ()=>{
    //Beginwaarde scoreboard
    let pScore = 0;
    let cScore = 0;
    
    //Start het spel
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => { 
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll ('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option=>{
            option.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            })
        })
        
        
    }

    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }
            else{
                winner.textContent = 'Computer wins';
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }
            else{
                winner.textContent = 'Player wins';
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                return;
            }
            else{
                winner.textContent = 'Player wins';
                return;
            }
        }
    }
    //Is call all the inner function
    startGame();
    playMatch();
    
};

//start game function
game();