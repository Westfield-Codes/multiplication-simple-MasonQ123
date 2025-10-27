/* MULTIPLICATION TABLES
 * FLOWCHART:https://lucid.app/lucidchart/3e0bd150-cafd-4a4b-a703-a1919eafbd7a/edit?page=GeKRoDTH-sii#
 */


/* Global Variables 
 * Set default values for low and high factors
 * Initialize mistakes array
 */
var low = 3;
var high = 9;
errors = [];
/* Function main() THIS REPLACES askQuestions(
 * Calls setup to change default values
 * Calls askQuestion with question number argument
 * Keeps score based on returned values from askQuestion
 * Calls showStats, which calls showTable 
 * @param: none
 * @return: none
 */
function main() {
   let wizard = confirm("Would you like to use the setup wizard?")
    if (wizard) setUp();

 let right = askQuestions(questions);
            let tables = confirm("would you like to study with a table?");
            if(tables) showTable(factor);
            let feedback = confirm("Would you like to see your stats?");
            if (feedback == true) showStats;
            return right;
}

/* Function setUp()
 * Asks if user wants to keep defaults for low, high, questions. 
 * If not default, calls changeVar to prompt user to provide new values
 * @param: none
 * @return: {integer} questions
 */
function setUp(){
let first = parseInt(prompt("What's the minimum factor you'd like to use"));
    let second = parseInt(prompt("What's the maximum factor you'd like to use?"));

    // Check for valid number input AND correct range
    if (isNaN(first) || isNaN(second) || first < 0 || second < 0 || first > second) {
        alert("You've input an invalid range. Please try again.");
        // Use recursion to re-prompt for the settings
        setUp(); 
    } else {
        // Only update globals when input is valid
        low = first;
        high = second;
    }    

let strQ = prompt("How many questions do you want to answer?");
questions = parseInt(strQ);

 while (Number.isNaN(questions) || questions < 0) {
  questions = prompt("Please enter a positive number:");
} 
}

/* Function askQuestion(question) 
 * Asks a multiplication question: 2 factors between low and high ranges
 * Provides feedback (correct?), returns true if correct, false if not * Adds missed factors to mistakes array.
 * @param: {integer} question 
 * @return: boolean value 
 */
function askQuestions(questions) {
    let right = 0;
    for (let question = 1; question <= questions; question++){
        right += askQuestion(question);
    }
    return right;
}

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
showStats(score, questions){
 
if (right == questions){
    alert("You've earned the Perfection Badge, congrats!");
}
else{
    alert("You got " + right + " out of " + questions + ".");
    showErrors();
}
let study = confirm("Would you like to study using tables?");

while(study == true){
showTable();
study = confirm("Would you like to study more tables?");
}
}
/* Function showErrors(errors)
 * Provides feedback on errors by showing pairs of factors.
 * statsAnalysis() shows most frequent factor in errors.  
 * @param: errors
 * @return: none
 */
showErrors(errors);


/* Function showTable(factor)
 * Display the table for the factor passed as a parameter
 * Builds table line by line with a loop, then shows table * One line for each factor value. low to high 
 * @param: factor
 * @return: none
 */
