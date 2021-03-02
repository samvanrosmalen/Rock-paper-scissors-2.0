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
        const computerOptions = ['rock', 'paper', 'scissors'];

        const computerNumber = Math.floor(Math.random()*3);
        console.log(compterNumber);
    }
    //Is call all the inner function
    startGame();
    
};

//start game function
game();