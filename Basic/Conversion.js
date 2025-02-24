let a="33"
let b =null

let aInNumber=Number(a) // 33
let bInNumber=Number(b) // 0

console.log(typeof a);
console.log(typeof aInNumber);
console.log(typeof b);
console.log(typeof bInNumber);
console.log(bInNumber);

//"33" => 33
// "33abc" => NaN ->Not a Number
//true => 1, false =>0

let s="Srting"
let sInBoolean=Boolean(s)

console.log(typeof s); // true
console.log(typeof sInBoolean);

// ""=> false
// 1=> true, 0=>false

let num=33
let numInString=String(num)

console.log(typeof num);
console.log(typeof numInString);

let score=13
let negScore=-score

console.log(negScore);
console.log("1"+2+2); // 122
console.log(2+2+"1"); // 32




