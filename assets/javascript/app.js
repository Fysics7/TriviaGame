// Total seconds
var gameClock = 90;

// Variable to hold the timer
var intervalId;

// What to do every second
function everySecond() {
    gameClock--;
    $("#timer").html("<h3>" + gameClock + " seconds remaining</h3>");
    
    if (gameClock === 0) {
        renderQuestion(true);
      // pop up the thing where it says how many you got
        clearInterval(intervalId);
    }
}

// When you click Start
function start() {
    intervalId = setInterval(everySecond, 1000);
}

$("#message-center").text('GOOD LUCK');  

// When "start" button gets clicked, run the start function
$("#start").on("click", function() {
  start();
  $("#timer").html("<h3>" + gameClock + " seconds remaining</h3>");
  $(this).hide();
});
console.log(gameClock);

// When "reset" button gets clicked, reset timer to zero
$("#reset").click(function() {
    gameClock = 0;
});



////////  Questions  ////////

// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
["Which year's top grossing video games are available on PS4?", "2002","2013", "2015", "C"],
["Which year was Fallout 3 released?", "2000", "2007", "2008", "C"],
["Which game of the PS4 has more players than XBOX One and Windows PC's combined?", "Resident Evil 6", "Battlefront", "Battlefield 1", "B"],
["Which game of the Assassin's Creed Series takes place in Ptolemaic Egypt?", "6th game", "10th game", "9th game", "B"],
["Most of us have played ATARI games.  What does ATARI stand for?", "Optimism", "Success", "Fun", "B"],
["In which game, every assassinated person is a real one with accurate death date and place?", "Assassin's Creed", "Hitman", "Take Em Out", "A"],
["What does Mario jumps on after completing a level?", "Flag Pole", "Mushroom", "Turtle Shell", "A"],
["which year was Minecraft released?", "2001", "2006", "2009", "C"],
["Homefront was a war game against which country?", "China", "North Korea", "Kuwait", "B"],
["What is another name of Counter Strike?", "Half-Life", "Half-Strike", "Covert-Ops", "A"],
["How many maximum controller are supported by PS3 system?", "7", "3", "9", "A"],
["Which year did BioShock Infinite release?", "2012", "2013", "2014", "B"],
["Which PC game was delayed in the release because of a hidden picture of a developer's butt?", "Halo 2", "Mass Effect 2", "Witcher 3", "A"],
["What does NES stand for?", "Nintendo Entertainment Saga", "Nintendo: Everyday Success", "Nintendo Entertainment System", "C"],
["Name of the all-time highest grossing game?", "Everquest", "Destiny", "World of Warcraft", "C"],
];

// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}

function renderQuestion(didTheyLose){
  test = get("test");
  if(pos >= questions.length || didTheyLose == true){
    // TODO: have the message say you lost
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct.</h2>";
    // TODO if (number of correct guesses is greater than 5 or whatever) { say: you win } else { say: you lost }
    // such as this:
    test.innerHTML += "Good Game";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h4>"+question+"</h4>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);