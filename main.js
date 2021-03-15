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
    //begin spel
    const playMatch = () => {
        const options = document.querySelectorAll ('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer opties
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option=>{
            option.addEventListener("click", function() {
                //Keuze van computer
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                //Handen verglijken
                compareHands(this.textContent, computerChoice)

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            })
        })
        
    }

    const updateScore = () =>{
        
    }


    //Handen verglijken
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'Gelijkspel';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Speler wint';
                return;
            }
            else{
                winner.textContent = 'Computer wint';
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wint';
                return;
            }
            else{
                winner.textContent = 'Speler wint';
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wint';
                return;
            }
            else{
                winner.textContent = 'Speler wint';
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