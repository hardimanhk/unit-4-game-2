// create character objects and vars
var playerIsLeft = false;
var player = [];
var defender = [];
var duelClickCounter = 0;
var currentHP = 0;
var currentDefenderHP = 0;
var leftOrRight = "";

// Gryffindors vs. Slytherins 
// Have player click a character's image to begin
// images are buttons 

// grab different buttons and add on click events
$(".character").on("click", function () {
    // once user choses a side other characters in that side of the screen are removed
    // and user's character becomes central image
    if (!player.length || !defender.length) {
        if (!player.length) {
            player = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            $(this).addClass("player");
            $(this).removeClass("characterLeft-bottom");
            if ($(this).hasClass("left")) {
                playerIsLeft = true;
                $("#top-left-players").hide();
                $("#bottom-left-players").hide();
                $("#left-player").append($(this));
            }
            if ($(this).hasClass("right")) {
                $("#top-right-players").hide();
                $("#bottom-right-players").hide();
                $("#right-player").append($(this));
            }
            // prompt user to choose an initial enemy 
            $("#instructions").text("Click an image to choose your opponent!");
        } else {
            defender = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
            $(this).addClass("defender");
            $(this).removeClass("characterLeft-bottom");
            if ($(this).hasClass("right")) {
                playerIsLeft = true;
                $("#top-right-players").hide();
                $("#bottom-right-players").hide();
                $("#right-player").empty();
                $("#right-player").append($(this));
                $("#right-player").show();
            }
            if ($(this).hasClass("left")) {
                $("#top-left-players").hide();
                $("#bottom-left-players").hide();
                $("#left-player").empty();
                $("#left-player").append($(this));
                $("#left-player").show();
            }
            $("#instructions").text("Click duel to battle!");
        }
        console.log(player + " player");
        console.log(defender + " defender");


    }
});

// $(".characterRight").on("click", function () {
//     // once use choses a side other characters in that side of the screen are removed
//     // and user's character becomes central image
//     if (!player.length || !defender.length) {
//         if (!player.length) {
//             player = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
//             isCharacterChosen = true;
//             $(this).addClass("player");

//             // prompt user to choose an initial enemy 
//             $("#instructions").text("Click an image to choose your opponent!");
//         } else {
//             defender = [$(this).attr("health"), $(this).attr("attackPower"), $(this).attr("counterAttack")];
//             isCharacterChosen = true;
//             $(this).addClass("defender");
//             $("#instructions").text("Click duel to battle!");
//         }
//         console.log(player + " player");
//         console.log(defender + " defender");


//     }
// });


$("#duel").on("click", function () {
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
    duelClickCounter++;
    $("#right-hp-score").show();
    $("#left-hp-score").show();

    defender[0] = defender[0] - (player[1] * duelClickCounter);
    player[0] = player[0] - defender[2];

    if (playerIsLeft) {
        $("#left-hp-score").html("<p>" + player[0] + "</p>");
        $("#right-hp-score").html("<p>" + defender[0] + "</p>");
    } else {
        $("#left-hp-score").html("<p>" + defender[0] + "</p>");
        $("#right-hp-score").html("<p>" + player[0] + "</p>");
    }




    if (defender[0] <= 0) {
        defender = [];
        //promt user to choose next enemy
        if (playerIsLeft) {
            $("#right-player").hide();
            $("#top-right-players").show();
            $("#bottom-right-players").show();
            $("#right-hp-score").hide();
        } 
        else {
            $("#left-player").hide();
            $("#top-left-players").show();
            $("#bottom-left-players").show();
            $("#left-hp-score").hide();
        }
        $("#instructions").text("Click an image to choose your next opponent!");
    }

    if (player[0] <= 0) {
        player = [];
        // show game over page
        $("#container").html("<h1>You lost :(</h1>");
        // create play again button
    }

    console.log(player + " player");
    console.log(defender + " defender");

});




// continue attack
// if player's HP falls below zero they lose
// if defender's HP falls below zero the player must choose a new defender