// *****************memories 2 types************************
// 1.Stack(primitive : we got copy of variable what we declare) primitive comes in stack kind of memory
// 2.Heap(non_premitive : refrence of original value,change happend in original value)

let myYoutubeName = "siddhi.com"

let anotherName =  myYoutubeName

anotherName = "chaicode"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
email: "siddhi@gmail.com",
 upi: "user@ybl"
}

 let userTwo = userOne

 userTwo.email = "chotu@gmail.com"
 console.log(userOne.email)
 console.log(userTwo.email)