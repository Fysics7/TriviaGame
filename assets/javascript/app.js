
// Variable for array of Video Game Questions
var questionArray = []

// Countdown timer variable
var gameClock = 10;

// Variable to hold setInterval
var intervalId;

// Prevents the clock from being sped up unnecessarily
var timerRunning = false;

// When "start" button gets clicked, run the start function
$("#start").click( function(){
  setInterval(function() {

    gameClock--;
    $("#message-center").text('GOOD LUCK');  
    $("#timer").html("<h2>" + gameClock + "</h2>");

    if (gameClock === 0) {
        alert('Game Over');
        clearInterval(gameClock);
      }
    }, 1000);
});
console.log(gameClock);






  
    
    
    
    
    
    
    


