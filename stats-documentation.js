/* MULTIPLICATION STATS
 * FLOWCHART:https://lucid.app/lucidchart/aa235bca-ebf5-456e-a314-668dee643180/view
 */


/* Global Variables 
 * Set default values for low and high factors
 * Initialize mistakes array
 */


/* Function main() 
 * Calls setup to change default values
 * Calls askQuestion with question number argument
 * Keeps score based on returned values from askQuestion
 * Calls showStats
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
 * Calls showErrors(errors) to display which factors led to errors to inform study.
 * While user wants to study tables, calls showTable for a factor.
 * Prompt changes from "any tables" to "more tables" 
 * @param: score, questions
 * @return: none
 */

/* Function showErrors(errors)
 * Provides feedback on errors by showing pairs of factors.
 * statsAnalysis() shows most frequent factor in errors.  
 * @param: errors
 * @return: feedback
 */

/* Function statsAnalysis()
 * Analysis mistakes array for frequency of error factors.
 * First, populates frequency array with 0's.  Then, 
 * Increments frequency values based on mistakes. 
 * Finally, analyzes frequency values for most highest factor frequency. 
 * Returns highest most frequent factor.  
 * @param: 
 * @return: feedback
 */
 
/* Function showTable(factor)
 * Display the table for the factor passed as a parameter
 * Builds table line by line with a loop, then shows table * One line for each factor value. low to high 
 * @param: factor
 * @return: none
 */
