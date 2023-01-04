var numberOfButton = document.querySelectorAll(".drum").length; 
var audio = [];
audio.push(new Audio("sounds/crash.mp3"));
audio.push(new Audio("sounds/kick-bass.mp3"));
audio.push(new Audio("sounds/snare.mp3"));
audio.push(new Audio("sounds/tom-1.mp3"));
audio.push(new Audio("sounds/tom-2.mp3"));
audio.push(new Audio("sounds/tom-3.mp3"));
audio.push(new Audio("sounds/tom-4.mp3"));

function getAudio(pressCode){
    switch(pressCode){
        case 'w':
            audio[3].play();
            break;
        case 's':
            audio[4].play();
            break;
        case 'a':
            audio[5].play();
            break;
        case 'd':
            audio[6].play();
            break;
        case 'j':
            audio[2].play();
            break;
        case 'k':
            audio[0].play();
            break;
        case 'l':
            audio[1].play();
            break;
        default:
            audio[3].play();
            break
    }
}


for(var i=0;i<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        getAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", (event)=>{
    getAudio(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("button." + currentKey);    
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}



// or you can use anonymous function like this
/*
    document.querySelector("button").addEventListener("click", function(){
        alert("I got clicked!!");
    })
*/

// we can passing function as an argument of an function;
/*
    function functionName(argument1, argument2, functionName){
        // return functionName(argument1, argument2);
    }
*/

// Create Object Constructor
/*
function Constructor(properties1, properties2, properties3){
    this.properties1 = properties1;
    ...
    this.functionName = function(){
        do something
    }
}
*/

