const accountId = 1234
let accountEmail = "siddhi@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

//  accountState; undefined

// there is some constant keywords in txt files and js file there is only difference of this keywords.
// the compiler of js i.e nodejs or v8 , keywords are pre defined init .they act accord to order.(i.e console:o/p andwhen find const, let,var then assign it in memory)
// variable assigned :var/let (in let the problem of scope"{}" reduced ["VAR"problem "blockscope" when a programmer change value of one place andother  use the same at diff places it gone changes allwhere])
// accountId = 2 "not allowed" bcz we cant use change constants

accountEmail = "jhdgvnh@owl.com"
accountPassword ="234"
accountCity = "vrindavan"

console.log(accountId);
 /*
***************PREFER NOT TO USE VAR
 BCZ OF ISSUE IN BLOCK SCOPE & Functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])



