/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

/* Global Variables */
var questions = 5;
var low = 3;
var high = 9;


/* main controls the program. 
 * Store the number of questions to ask in a variable called questions.
 * Call askQuestions, sending questions as an argument, which returns the number right. 
 * Give feedback depending on the number right returned: Either "Perfect!" or say 
 * how many right out of the number asked (questions). 
 * @param none
 * @return none
 */


function main(){

let wizard = confirm("Would you like to use the setup wizard?")
if (wizard == true) setUp();
else{
    let right = askQuestions(questions);
        if (right == questions) alert("Perfect!");  
        else alert("You got " + right + " out of " + questions + ".");
}
}

/* setUp lets the student customize the multiplication game
* specify the range of factors and let the student decide what they should be
* specify how many questions the student wants and what those should be, this should be done through assigning an existing GLOBAL variable
* @param none
* @return none
*/
function setUp() {
let first = prompt("What's the maximum factor you'd like to use?");
let second = prompt("What's the mimimum factor you'd like to use")
high = parseInt(first);
low = parseInt(second);

strQ = prompt("How many questions do you want to answer?")
questions = parseInt(strQ);

while (Number.isNaN(questions) && questions < 0){
    questions = prompt("Please try again with a positive number.")
}
}


/* askQuestions calls askQuestion() questions times (for loop), sending the question number as an argument. 
 * It counts the number right returned, and returns number right to main() for feedback.
 * @param: {integer} questions 
 * @return: {integer} right (0-questions)
 */
function askQuestions(questions) {
    let right = 0;
        for (question; question <= questions; question++) right += askQuestion(question);
        return right;
}




/* askQuestion asks a multiplication question, using the question parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: {integer} question (1 - questions)
 * @return: {integer} correct (0 or 1) or {boolean} correct
*/
function askQuestion(question){
    let a = Math.floor(Math.random()*7+3);
    let b = Math.floor(Math.random()*7+3);
    let product = a * b;
    let equation = "Question " + question + ": " + a + " * " + b + " = ?";
    let answer = prompt(equation);
        if (answer == product){ 
            alert("Correct!")
            return true;
        }
        else{
            alert("Sorry, but that's incorrect.")
            return false;
        }
}


/* to-do later
* specify how many questions the student wants and what those should be, this should be done through assigning an existing GLOBAL variable
* setting where they can keep guessing until they've gotten the correct answer
*/