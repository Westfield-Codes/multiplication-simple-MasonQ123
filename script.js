let low = 3;
let high = 9;
let mistakes = [];



// Main function
function main() {
  let questions = setUp();
  let score = 0;


  for (let i = 1; i <= questions; i++) {
    let correct = askQuestion(i);
    if (correct) score++;
  }


  showStats(score, questions);
}


// Function setUp()
function setUp() {
  let keepDefaults = confirm(
    "Would you like to keep the default min and max ranges of " + low + " to " + high + "?"
  );


  if (keepDefaults !== true) {
    low = changeVar("minimum value");
    high = changeVar("maximum value");
  }


  let defaultQuestions = 5;
  let keepQuestions = confirm(
    "Would you like to keep the default number of questions (" + defaultQuestions + ")?"
  );


  if (keepQuestions !== true) {
    defaultQuestions = changeVar("number of questions");
  }


  return defaultQuestions;
}


// Function changeVar(variable)
function changeVar(variable) {
  let value = parseInt(prompt("Enter the new " + variable + ":"));
  while (isNaN(value) || value <= 0) {
    value = parseInt(prompt("Invalid input. Enter the new " + variable + " again:"));
  }
  return value;
}


// Function askQuestion(question)
function askQuestion(question) {
  let num1 = Math.floor(Math.random() * (high - low + 1)) + low;
  let num2 = Math.floor(Math.random() * (high - low + 1)) + low;
  let answer = parseInt(prompt("Question " + question + ": What is " + num1 + " x " + num2 + "?"));


  if (answer === num1 * num2) {
    alert("Correct!");
    return true;
  } else {
    alert("Incorrect. The correct answer was " + (num1 * num2));
    mistakes.push([num1, num2]);
    return false;
  }
}


// Function showStats()





// Function showTable(factor)



// Start program

