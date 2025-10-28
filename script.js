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
function showStats(score, questions) {
  if (score == questions) {
    alert("Perfect score! You earned the Perfection Badge!");
  } else {
    alert("You got " + score + " out of " + questions + " correct.");
    if (mistakes.length > 0) {
      showErrors(mistakes);
    }
  }
=======
/* Global Variables 
 * Set default values for low and high factors
 * Initialize mistakes array
 */


/* Function main() THIS REPLACES askQuestions(
 * Calls setup to change default values
 * Calls askQuestion with question number argument
 * Keeps score based on returned values from askQuestion
 * Calls showStats, which calls showTable 
 * @param: none
 * @return: none
 */


/* Function setUp()
 * Asks if user wants to keep defaults for low, high, questions. 
 * If not default, calls changeVar to prompt user to provide new values
 * @param: none
 * @return: {integer} questions
 */



/* Function changeVar(variable)
 * Asks user which value to change variable to
 * Parses value as integer
 * @param: variable
 * @return: {integer} value 
 */


/* Function askQuestion(question) 
 * Asks a multiplication question: 2 factors between low and high ranges
 * Provides feedback (correct?), returns true if correct, false if not * Adds missed factors to mistakes array.
 * @param: {integer} question 
 * @return: boolean value 
 */


/* Function showStats()
 * Provides feedback on total correct out of total asked. 
 * If perfect score, displays "Perfection Badge"
 * If not perfect, displays how many right out of questions
 * Calls showErrors to display which factors led to errors to inform study.
 * While user wants to study tables, calls showTable for a factor.
 * Prompt changes from "any tables" to "more tables" 
 * @param: score, questions
 * @return: none
 */

/* Function showErrors(errors)
 * Provides feedback on errors by showing pairs of factors.
 * statsAnalysis() shows most frequent factor in errors.  
 * @param: errors
 * @return: none
 */
>>>>>>> 97975a9 (restart)


  let more = confirm("Would you like to study any tables?");
  while (more == true) {
    let factor = parseInt(prompt("Enter the factor you'd like to study:"));
    showTable(factor);
    more = prompt("Would you like to study more tables? (yes/no)");
  }


  alert("Thanks for playing!");
}


// Function showErrors(errors)
function showErrors(errors) {
  let message = "You missed these problems:\n";
  for (let i = 0; i < errors.length; i++) {
    message += errors[i][0] + " x " + errors[i][1] + " = " + (errors[i][0] * errors[i][1]) + "\n";
  }
  alert(message);
}


// Function showTable(factor)
function showTable(factor) {
  let table = "Multiplication Table for " + factor + ":\n";
  for (let i = low; i <= high; i++) {
    table += factor + " x " + i + " = " + (factor * i) + "\n";
  }
  alert(table);
}


// Start program
main();
