'use strict';

import { favoriteClass } from './other.js';

import printName from './other.js';


console.log("executing main.js")

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
//console.log(peopleArray);


peopleArray.forEach(printName);


const foo = (params) => { 
  return 'foo '+params;
}

console.log(foo('world'));

// const myArray = [1, 2, 3];
// const [x, y, z, q] = myArray;
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];
// console.log(x); //=> 1;
// console.log(y); //=> 2;
// console.log(z); //=> 3;
// console.log(q);


//destructuring objects
// const myObject = {a: 1, b: 2, c: 3, e: 5};
// const {b, a, c, d} = myObject; //myObject.a to a, etc.
// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;
// console.log(d); 

// const getBMI = ({height, weight}) => 703*weight/(height*height); 

function getBMI(personObj) {
  const {height, weight} = person;
  return 703*weight/(height*height);
}