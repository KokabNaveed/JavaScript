// The switch statement is used to perform different actions based on different conditions.

/*
    If multiple cases matches a case value, the first case is selected.

    If no matching cases are found, the program continues to the default label.

    If no default label is found, the program continues to the statement(s) after the switch.
*/

date = 4;

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day="Invalid date"  
}

console.log(day);