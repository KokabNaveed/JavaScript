// data type define nae krty
// just Let, var, Const keyword use krty 

// Let -> this is also used to declare a variable ..but it cannot be redefine in the same scope... but outside the scope behaves like a Var
// we will mostly use Let

let letName="Kokab";

console.log("My name from Let variable is",letName);

// let letName="Kokab Naveed"; // cannot be possible as it is in same scope

function name(){
    let letName="Kokab Naveed";  // here it is possible as it is outof scope variable
    console.log("My name from function is",letName);

}

name();


//NOTE: w'ill learn about functions later