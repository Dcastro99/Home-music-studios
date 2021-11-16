'use strict'


function createGreeting(){
    let userName = getUserName();
    let greeting = hourOfDay();
    document.write(greeting + ', ' + userName + "!");
}

function getUserName(){
    let UserName = prompt("what's your name?");
    return UserName;
}

function hourOfDay(){
    let currentHour = prompt("What is the current hour of the day (1-24)");
    let greeting = "";
    if(currentHour >= 17 && currentHour <= 24){
        greeting = "Good Evening"; 
    } else if(currentHour >= 12 && currentHour <= 16){
        greeting = "Good Afternoon";
    } else if(currentHour > 0 ) {
        greeting = "Good Morning";
    }else {
        greeting = "Welcome";
    }

    return greeting;
}
function sayHello(){
    let answer = prompt("how many albums does U2 have?");
    if(answer == 14){
        alert("you are right!")
    } else{
        alert("You are wrong, they have 14");
    }
    console.log("Hello");

}

    function openText(){
        let number = 1;
        if(number === 1){
            document.write("hello, this is some pretty cool text");
        } else if(number === 3) {
        }
    }

    alert("Music rules!");
    sayHello(); 
