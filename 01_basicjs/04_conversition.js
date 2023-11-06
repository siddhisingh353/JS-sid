// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);
// js automatically convert it into num

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// // t/f/f


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// all will false for undefined
// we will not use this kind of comparison bcz clean code is preferable

// === strict check    it will check data type also

// console.log("2" === 2);



// ***********************DATA TYPES*************************

//1. PREMITIVE DATA TYPE(call by value type: when we copy them from somewhere to somewhere we are not able to get original data refrence but we got copy and when we made cahnges it will in copy only)
// 7 types: String , number , boolean , null , undefined(variable ,memory space declared but value is not currently ), symbol(make value unique),BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail = undefined 
// let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// symbol:if we assign same value i.e string but the value of both will deffer[datatype of symbol is symbol]
// console.log(id == anotherId);

const bigNumber = 7875874756759837587n


// we never defined lanlguage bin javascript

// 2.REFRENCE TYPE OR (NON PREMITIVE)(refrence can be directly allocate in memory)

// Objects, Array, Functions [datatype of non-premitive is called functions ]


// for all non_premitives:typeof will object i.efor  fonctiion it will function object.


const heros = ["shaktiman","juniorji","doga"]
// objects are in curly braces//////////we can store objects in variable also i.e let myobj
let myobj = {
    name : "siddhi",
    age : 23,
}

// we can treat function as variable in JS there is more ways but this one is variable method

const myFunction = function()
{
console.log("hello siddhi");
}
// whenever we write typeof before any variable then it show data type
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);
// for id and another id it will come symbol