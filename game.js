var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3 + 1) 

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);

    animatePress(randomChosenColour);

    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();

    /*switch (randomChosenColour) {
        case "red":
            var redColor = new Audio("sounds/red.mp3");
            redColor.play();
            break;
        case "blue":
            var blueColor = new Audio("sounds/blue.mp3");
            blueColor.play();
            break;
         case "green":
            var greenColor = new Audio("sounds/green.mp3");
            greenColor.play();
            break;
         case "yellow":
            var yellowColor = new Audio("sounds/yellow.mp3");
            yellowColor.play();
            break;
    
        default:
            console.log(randomChosenColour)
            break;
    }*/

    
} 

$(".btn").click(function(){
    var userChosenColour =  $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour)

    //var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    //audio.play();

    /*switch (userChosenColour) {
        case "red":
            var redColor = new Audio("sounds/red.mp3");
            redColor.play();
            break;
        case "blue":
            var blueColor = new Audio("sounds/blue.mp3");
            blueColor.play();
            break;
         case "green":
            var greenColor = new Audio("sounds/green.mp3");
            greenColor.play();
            break;
         case "yellow":
            var yellowColor = new Audio("sounds/yellow.mp3");
            yellowColor.play();
            break;
    
        default:
            console.log(randomChosenColour)
            break;
    }*/

    //console.log(userClickedPattern);
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour) {
    $("#"+ currentColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    },100);
}