const score = 400
console.log(score);

// properties of Num
// it print type also and by using new and specific value it will show in///through prototype lots of properties inside num (can convert these values from num to[i.e .toString,.toFixed, .toPrecision, .toexponential] )
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof (balance));
// precision value means if we give the value 3 then it count only 3 num(i.e 140.39=value 3 = it atke 141 & if we write 4 = 140.3) with decimal or without and take it in round figure.(i.e num = 1123.7677 and prevalue is 3= 1.12e+3 )
console.log(balance.toFixed(2));

const otherNum = 3389.65
console.log(otherNum.toPrecision(3));

// .tolocaleString= it put cooma in nums(10000) according to americal standards but can change in indian by('en-IN')
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))







