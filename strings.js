const text = "please locate where 'locate' occurs!";
const index = text.indexOf("locate");
console.log(index);

const search = "This is a search string.";
console.log(search);

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match("ain"));
console.log(text2.match(/ain/g));
console.log(text2.match(/ain/gi));

const text3 = "I love cats. Cats are very easy to love. Cats are very popular";
const iterator = text3.matchAll(/Cat/gi); // Use regex instead of string
console.log(Array.from(iterator));

let text4 = "Hello world, welcome to the universe";
const startAtTwelve = text4.includes("world", 12); // Change variable name
console.log(startAtTwelve);

const startAtZero = text4.includes("world");
console.log(startAtZero);

// JavaScript template strings
let text5 = 'He is often called "Johnny"';
const text6 =
`
My
name
is
Sandra
`; // Corrected template string

// JavaScript interpolation
let firstName = "John";
let lastName = "Doe";
let text7 = `Welcome ${firstName}, ${lastName}!`;

const student = {
    name: "Sandra",
    age: 25,
    class: "Advanced"
};

const studentprofile = `I am in the ${student.class} class, studying JavaScript`;
console.log(`My name is ${student.name}, I am ${student.age} years old.`);
console.log(studentprofile);

const cohort3 = {
    studentprofile: {name: "Sandra", age: 25},
    Year: "2024"
};

const cohortInfo = `I am in the ${cohort3.studentprofile.class} class, studying JavaScript`;
console.log(`My name is ${cohort3.studentprofile.name}, I am ${cohort3.studentprofile.age} years old.`);
console.log(cohortInfo);











