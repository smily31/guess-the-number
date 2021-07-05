/* ***
* Guess The Number Game
* DONE: Get user value from input and save it to a variable NumberGuess
* DONE: Generate a random number between 1 to 100 and save it to a variable correctNumber
* DONE: Console whether the guess is too high , too low , or is correct inside playGame function
* DONE: Create a function called displayResult to move the logic for if the guess
* DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
* DONE: Use the showYouWon..... functions within displayResult to display the correct 
* DONE: Save the guess history in a variable called guesses(array)
* DONE: Display the guess history using displayHistory() function
* DONE: Use the initGame() function to restart the game
*/


// variables used 
let correctNumber = getRandomNumber();
let guesses = [];


// Fuctionality for playing the whole game


// start of the program
window.onload = function () {
    document.getElementById("check_me").addEventListener("click", playGame);
    document.querySelector("#input_no").addEventListener('keyup', function (e) {
        // if enter is pressed
        if (e.which === 13) {
            playGame();
        }
    });
    document.getElementById("restart_game").addEventListener("click", initGame);
}

// Generating random number
function getRandomNumber() {
    var randomNumber = Math.floor(100 * Math.random()) + 1;
    return randomNumber;
}


function playGame() {
    let numberGuess = document.getElementById('input_no').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function displayResult(numberGuess) {
    if (numberGuess < correctNumber) {
        console.log("Too low");
        showNumberAbove();
    }
    else if (numberGuess > correctNumber) {
        console.log("Too High");
        showNumberBelow();
    }
    else {
        console.log("Its correct");
        showYouWon();
    }
}

function showYouWon() {
    const text = "Awesome job! You got it.";
    let dialogType = "won";
    let dialog = dialogBox(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too low!";
    let dialogType = "warning";
    let dialog = dialogBox(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too high!"
    let dialogType = "warning";
    let dialog = dialogBox(dialogType, text);
    document.getElementById("result").innerHTML = dialog;
}

function dialogBox(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "won": dialog = `<div class="won box" >`;
            break;
        case "warning": dialog = `<div class= "warning box" >`;
            break;
    }
    dialog += text;
    dialog += `</div>`;
    return dialog;
}

// save guess history->append to array
function saveGuessHistory(guess) {
    guesses.push(guess);
}

// to display gusses history
// <ul class='list-group'>     <li class='list-group-item'>""</li></ul>
function displayHistory() {
    let index = guesses.length - 1;
    let list = `<ul class="list-group">`;
    while (index >= 0) {
        list += `<li class=list-group-item>` + "You guessed " + guesses[index] + `</li>`;
        index--;
    }
    list += `</ul>`
    document.getElementById("history").innerHTML = list;
}


// Restart functionality

// initGame function's task is to 
// Reset correctNumber
// Reset result display
// Reset guesses array and its display

function initGame() {
    correctNumber = getRandomNumber();
    resetResultContent();
}

// Reset html content for guess history
function resetResultContent() {
    guesses = [];
    document.getElementById("result").innerHTML = "";
    displayHistory();
}
