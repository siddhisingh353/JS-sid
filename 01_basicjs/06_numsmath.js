// const score = 400
// console.log(score);

// // properties of Num
// // it print type also and by using new and specific value it will show in///through prototype lots of properties inside num (can convert these values from num to[i.e .toString,.toFixed, .toPrecision, .toexponential] )
// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof (balance));
// // precision value means if we give the value 3 then it count only 3 num(i.e 140.39=value 3 = it atke 141 & if we write 4 = 140.3) with decimal or without and take it in round figure.(i.e num = 1123.7677 and prevalue is 3= 1.12e+3 )
// console.log(balance.toFixed(2));

// const otherNum = 3389.65
// console.log(otherNum.toPrecision(3));

// // .tolocaleString= it put cooma in nums(10000) according to americal standards but can change in indian by('en-IN')
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// // **************************************MATHS****************************************
// // its a javascript library which comes by default

// console.log(Math);
// // abs/absolute:only to change minus sign
// console.log(Math.abs(-5));
// // **************round of  (wrap value)***********************
// console.log(Math.round(4.3));
// // when we want to control the choose the upper or lower it has 2 methods for this (ceil(round off with upper val[when it just high to 4 then it choose highest value which 5],floor(round off with lowest[from 4.2 it choose lowest value thats 4])
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,4,7,8));
// console.log(Math.max(4,3,4,7,8));
// **********************************math.random*******************************************************
// value of .random will lie b/w 0 to 1 to avoid decimal we * 10 and add +1 so we always get some value more than 1 
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
// only to avoid zero value.[formula]
console.log(Math.random() * (max - min + 1));
// to achieve atleat minimum value.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


























