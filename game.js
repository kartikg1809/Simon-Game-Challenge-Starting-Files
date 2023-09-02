let options=["red","blue","green","yellow"];

let gamePattern=[];
let userClickedPattern = [];

function newSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    randomColor=options[randomNumber];
    gamePattern.push(randomColor);
    console.log(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomColor);
}

$(".btn").click(function(){
    let chosen=$(this).attr("id");
    userClickedPattern.push(chosen);
    playSound(chosen);
    
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
newSequence();