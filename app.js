'use strict'

//declare a variable


let userName = prompt("What is your name?");
let currentHour = prompt("What is the current hour of the day (1-24)");
let greeting = "";

if(currentHour >= 17 && currentHour <= 24){
    greeting = "Good Evening";
} else if(currentHour >= 12 && currentHour <= 16){
    greeting = "Good Afternoon";
}else if(currentHour > 0) {
    greeting = "Good Morning";
}else {
    greeting = "You are not Welcome";
}

console.log(userName);



if(userName.toLowerCase() === "danny"){
    alert("Hi Danny!");
} 



else if(userName.toLowerCase){
    alert("hi "+ userName)
}
else{
    alert("I don't recognize your name");
}
document.write(greeting + ',' + userName.toUpperCase() + "!");