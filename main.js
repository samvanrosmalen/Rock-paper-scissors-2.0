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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            })
          })

        //computer opties
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option=>{
            option.addEventListener("click", function() {
                //Keuze van computer
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

               setTimeout(() =>{
                 //Handen verglijken
                 compareHands(this.textContent, computerChoice)

                 //update images
                 playerHand.src = `./assets/${this.textContent}.png`;
                 computerHand.src = `./assets/${computerChoice}.png`;
               }, 2000)

                //Animatie handen
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })
        
    }

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
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
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer wint';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wint';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Speler wint';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wint';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Speler wint';
                pScore++;
                updateScore();
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