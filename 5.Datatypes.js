// js has datatypes of numbers, strings, boolean, Null, undefined and object

// but while declaring variable we don't need to specify it like int age=23; .... instead we use age = 23; ... compiler will interpert it as a number

age = 23; // number
name = "KOKAB"; // string
IsMarried = false; // boolean
grade='A'; // string -> char behaves as string
CGPA = 3.581 ; // number -> float behaves as numbers 
fav_subjects = ['Maths','Data Science','NLP','CVIP']; // array as an object


// typeof function will show the datatype of variable

console.log("The type of",age,"is",typeof(age));
console.log("The type of",name,"is",typeof(name));
console.log("The type of",IsMarried,"is",typeof(IsMarried));
console.log("The type of",grade,"is",typeof(grade));
console.log("The type of",CGPA,"is",typeof(CGPA));
console.log("The type of array","is",typeof(fav_subjects));