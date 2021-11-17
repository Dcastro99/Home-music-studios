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







let answer = "";
do{
    answer = prompt("How many albums has U2 written (1-20)?");
    
    if(answer > 14){
        alert("Try again");
        alert("You are too high!")
    } else if(answer < 14){
        alert("Try again");
        alert("You are too low!");
    } else{
        alert("You are correct!");
    }
}
while(answer !=="14")

function displayRecords(){
    let number = prompt("How many records do you want to write?");
    for(let record = 1; record <= number; record++){
        document.write('<img src="images/gold record.jpeg"/>')
    }
}

{

    
//function sayHello(){
  //  let answer = prompt("how many albums has the band U2 written?");
    //if(answer == 14){
      //  alert("you are right!")
    //} else{
       // alert("You are wrong, they have 14");
   // }
    console.log("Hello");

}

   
    alert("Music rules!");
    sayHello(); 
