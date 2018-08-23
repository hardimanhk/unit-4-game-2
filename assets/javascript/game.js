// create character objects and vars
var isCharacterChosen = false;
var isDefenderChosen = false;
var player = [];
var defender = [];
var deulClickCounter = 0;

// Gryffindors vs. Slytherins 
// Have player click a character's image to begin
// images are buttons 

// grab different buttons and add on click events
$(".characterLeft").on("click", function () {
    // once use choses a side other characters in that side of the screen are removed
    // and user's character becomes central image
    if (!isCharacterChosen || !isDefenderChosen) {
        if (isCharacterChosen) {
            defender = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            isDefenderChosen = true;
        } else {
            player = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            isCharacterChosen = true;
        }
        console.log(player);
        console.log(defender);
        // prompt user to chose an initial enemy 

    }
});

$(".characterRight").on("click", function () {
    // once use choses a side other characters in that side of the screen are removed
    // and user's character becomes central image
    if (!isCharacterChosen || !isDefenderChosen) {
        if (isCharacterChosen) {
            defender = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            isDefenderChosen = true;
        } else {
            player = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            isCharacterChosen = true;
        }
        console.log(player);
        console.log(defender);

        // prompt user to chose an initial enemy 

    }
});


$("#deul").on("click", function () {
    // duel: * The player will now be able to click the `duel` button.
    // Whenever the player clicks `duel`, their character damages the defender. 
    // The opponent will lose `HP` (health points). 
    // These points are displayed at the bottom of the defender's picture. 
    // The opponent character will instantly counter the attack. 
    // When that happens, the player's character will lose some of their `HP`. 
    // These points are shown at the bottom of the player character's picture.

    // so function needs to take in the 'HP' and 'attack power' or each character
    // function will first subtract the player's attack power from the opponent's HP
    // then function will subratct the opponent's counter attack from the player's HP
    // add the base to the player's attack power (6, 12, 18, 24, 30, etc)
    // display new HP values at the bottom of each character's picture
    deulClickCounter++;

    defender[0] = defender[0] - (player[1] * deulClickCounter);
    player[0] = player[0] - defender[2];

    console.log(defender);
    console.log(player);

});




// continue attack
// if player's HP falls below zero they lose
// if defender's HP falls below zero the player must choose a new defender