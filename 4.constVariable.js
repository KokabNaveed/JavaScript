// data type define nae krty
// just Let, var, Const keyword use krty 

//const -> it is used for constant values.... when we want to sure that the value should not change throughout the program  we declare it const

// it can neither be redefine(neither in scope nor out of scope) nor can be changed


const Name="Kokab";

console.log("My name from const variable is",Name);

// for in scope

// Name="Kokab Naveed"; // it will give ruuntime error -> Assignment to constant variable.

// console.log("My name from const variable after changing is",Name); // it will also not run


//for out of scope

// function name(){
//    Name="Kokab Naveed";  // here it is also not possible as it is const
//     console.log("My name from function is",Name);

// }

// name();


//NOTE: w'ill learn about functions later