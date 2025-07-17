const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text = person[x];
  console.log(x,text);
}

/*
    The for in loop iterates over a person object
    Each iteration returns a key (x)
    The key is used to access the value of the key
    The value of the key is person[x]
*/

// for in loop in array

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt = numbers[x];
  console.log(txt);
}

/*

NOTE:

Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

*/