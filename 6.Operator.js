// the operators in js behave same as in other languages however we'll learn new operator (===) here

//addition

num1 = 14 ;
num2 = 7;

sum = num1+num2; //addition of nums

console.log("Addition result of two numbers is",sum);

firstName ="Kokab";
lastName =" Naveed";
stringsum=firstName+lastName; // addition of strings -> concatenation

console.log("Addition result of two strings is",stringsum);

//subtraction

sub = num1 - num2; // sub of two nums

console.log("Subtraction result of two numbers is",sub);

// sub2="hello"-"hell"; // subtraction of two strings is not possible

//multiplication

mul = num1 * num2;
console.log("Multiplication result of two numbers is",mul);

//division

div = num1 / num2;
console.log("Division result of two numbers is",div);

//modulus

mod = num2 % 2; // num2 = 7
console.log("Modulus result is",mod);

// equal to (==) -> it only compares values not dataType

console.log(`Using (==) "5" and 5 are equal in js`,("5"==5))

// triple equal to (===) -> it compares both value and dataType

console.log(`Using (===) "5" and 5 are equal in js`,("5"===5))
