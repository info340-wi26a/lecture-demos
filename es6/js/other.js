'use strict';

console.log("executing other.js");
console.log("Hello world");

const x = 340;
const peopleArray = ["John", "Paul", "George", 'Ringo'];
console.log("other people!!", peopleArray);

export default function printName(personObj){
  console.log(personObj.name);
}

export const favoriteClass = "INFO 340";