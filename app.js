var aye = 4;
var bee = 8;

function one(arg1,arg2){
    return arg1 + arg2;
}

console.log(one(aye,bee))

function two(arg3,arg4){
    return arg4 - arg3;
}
console.log(two(aye,bee))

function three(arg5,arg6){
    return arg5 * arg6;
}

console.log(three(aye,bee))

function four(arg7,arg8){
    return arg8 / arg7;
}

console.log(four(aye,bee))

const FOUR = (a1,a2) => a1+ a2;

console.log(FOUR(aye,bee))

const FIVE = (a3,a4) => a3 - a4;
console.log(FIVE(bee,aye));

const SIX = (a5,a6) => a5 * a6;
console.log(SIX(aye,bee));

const SEVEN = (a7,a8) => a8 / a7;
console.log(SEVEN(aye,bee))