//javascript is a syncchronous and a single thread langauge(it means one line of code at a one time)

console.log('Hello class')
//primitive Datatype-String, Integer, Boolean, null, undefined
//non primitive Datatypes - Arrays, Object, Symbols and Functions
//three type of variables are lit, var , cons
//var a=16;
//console.log(a);
//difference between var, let, and cons
//var a;//declaration
//a=30;//assignment
//var a;//redeclaration
//a=40;//reassignment
//console.log(a);//redeclaration and reassignment is possible in var

//let a;//declaration
//a=20;//assignment
//let a;//redeclaration is not possible
//a=50;//reassignment
//console.log(a);

const a=20;
//const a; redeclaration is not possible 
//a=70;reassignment is also not possible
//console.log(a);

//let realName="aditya";
//let otherName="realname";
//otherName="uttu";//reassigned a value to the variable
//console.log(realName);
//console.log(otherName);
//primitive datatype store their value into stack memory
//Non-primitive datatype store their value into heap memory

let arr = [20, "aditya",true,null,undefined];
let newArr = arr;
arr[1]="aditya";
console.log(arr);
console.log(newArr);