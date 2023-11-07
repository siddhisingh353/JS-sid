// *****************memories 2 types************************

// 1.Stack(primitive : we got copy of variable what we declare) primitive comes in stack kind of memory

// 2.Heap(non_premitive : refrence of original value,change happend in original value)

let myYoutubeName = "siddhi.com"

let anotherName =  myYoutubeName

anotherName = "chaicode"

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
email: "siddhi@gmail.com",
 upi: "user@ybl"
}

 let userTwo = userOne

 userTwo.email = "chotu@gmail.com"
//  console.log(userOne.email)
//  console.log(userTwo.email)



//  *********************STRING******************************

const name = "sid"
const repocount = 50

// console.log(name + repocount + "age");  //// [outdated way of concatinate(merge)]

// console.log(`hello my name is ${sid} and my repocount is ${100} `);
// string interpolation: we make place holder and directly inject variables init.///smart way

const gameName = new String(`siddhi-hc`)
//another syntax of writing string//   /// use new keyword and object of js and give name in constructor.

// we know how to access key value pair
console.log(gameName[0]);     
// syntax for access prototype
console.log(gameName.__proto__);

// can directly access all methods by (.)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)


