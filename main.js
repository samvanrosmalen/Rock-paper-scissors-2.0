const game = ()=>{
    //Beginwaarde scoreboard
    let pScore = 0;
    let cScore = 0;
    
    //Start spel functie aanmaken
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => { 
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //begin spel functie maken
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
                //Keuze van computer uit 3 random getallen
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

               setTimeout(() =>{
                 //Handen verglijken
                 compareHands(this.textContent, computerChoice)

                 //update img handen
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
        
        //Speler kiest Steen
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

        //Speler kiest papier
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

        //Speler kiest schaar
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
    //de reset score funtie
    const newGame = () =>{
        const restartGame = document.querySelector(".newgame button")
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const winner = document.querySelector('.winner');

        restartGame.addEventListener("click", () =>{

            alert("De scores worden gereset!")
            playerHand.src = `./assets/rock.png`;
            computerHand.src = `./assets/rock.png`;
            winner.textContent = 'Kies een optie'
            pScore = 0;
            cScore = 0;
            updateScore();
            return;
        })
    }
    
    
    //Functies voor starten spel aanroepen
    startGame();
    playMatch();
    newGame();
    
};

//Spel starten
game();