//Asks the user to enter 1 for 'count down' and 2 for 'count up'.
// Keep ask them them to do that until they enter 'q' to quit.
// If they enter 1, ask them what they want to count down to.
// Start from 0 and count down to that number by ones.
// If they enter 2, ask them what they want to count up to.
// Start from 0 and count up to the number by ones.


var userInput = parseInt(prompt("Enter 1 to count down. Enter 2 to count up. Enter q to quit."));
var number = -1000;
var number2 = 1000;
    if(userInput ===1)
    {
        prompt("What number would you like to count down to?");
    }

else if(userInput ===2)
{
    prompt("What number would you like to count up to?");
}