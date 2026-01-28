'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]



// const peopleArrayArray = [
//   peopleArray,
//   ['john', 'paul', 'george', 'ringo']
// ]
// console.log(peopleArrayArray);

// console.log(peopleArray);

// console.log( peopleArray[2] )

// const chrisObj = peopleArray[2];
// console.log( peopleArray[2].height );

// console.log(peopleArrayArray[0][2].name )

// for(const personObj of peopleArray){
//   console.log(personObj.name);
// }



// function sayHello(name) { 
//    console.log("Hello, "+name);
// }

// console.log(typeof sayHello);

// const other = sayHello;

// other('class');

// const myFunction = function(person) {
//    console.log("Hello, "+person);
// }

// myFunction("joel");

// const message = "hello world";

// function callWithWorld(aFunction) {
//    aFunction("world");
// }

// function sayGoodbye(name) {
//   console.log("Goodbye," + name);
// }

// //call function and pass value
// callWithWorld(sayHello); //"Hello world"
// callWithWorld(sayGoodbye);

// function getHello() { //version with no args
//     return "Hello";
// }

// console.log( getHello );

function doTogether(firstCallback, secondCallback){
    //console.log("firstCallback", firstCallback);
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

// function patHead() {
//     console.log('pat your head');
// }

// function rubBelly() {
//     console.log('rub your belly');
// }

// //pass in the callbacks to do them together
// doTogether(patHead, rubBelly());



// for(const personObj of peopleArray){
//   console.log(personObj.name);
// }


const printName = function(personObj){
  console.log(personObj.name);
}

peopleArray.forEach(function(personObj){
  console.log(personObj.name);
});


const capitalize = function(name){
  return name.toUpperCase();
}

//["","","",""]
const beatlesArray = ['john', 'paul', 'george', 'ringo'];

const capitalBeatles = beatlesArray.map(function(name){
  return "<li>"+name+"</li>";
})
console.log(beatlesArray);
console.log(capitalBeatles);

