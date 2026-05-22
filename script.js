console.log("Rock, Paper, Scissors Game external file");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
   const userInput = prompt("Please enter rock, paper, scissors:"); 
   const choices = ["rock", "paper", "scissors"];
   for(let i = 0; i <= choices.length; i++) {
    if(userInput.toLowerCase() === choices[i]) {
        return userInput.toLocaleLowerCase();
    } else {
        console.log("Invalid input, please try again.");
    }
   }
}