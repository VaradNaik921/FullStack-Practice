let a=5;
console.log(a);

//FOR
console.log("For Loop1")
for(let i=0; i<5; i++){
    console.log(i);
}
console.log("For Loop2")
let j=1;
for(; j<=5; j++){
    console.log(j);
}

//WHILE
console.log("While Loop")
let x=0;
while(x<5){
    console.log(x);
    x++;
}

//DO WHILE
console.log("Do While Loop")
let b=0;
do{
    console.log(b);
    b++;
}while(b<5)

//IF
console.log('Enter a Number')
let c=1;
if(c<5){
    console.log('Normal way:')
    console.log('input no '+ c +' is less than 5')
    console.log('Templlate string/literal:')
    console.log(`input number is ${c}, which is ${5-c} less than 5`)
}
else if(c=5){
    console.log(`the number ${c} is equal to 5`)
}
else{
    console.log(`number ${1} is greather than 5`)
}

//Switch case
console.log(' ')
let day=0;
switch(day){
    case day=0:
        console.log('Sunday')
    break;
    case day=1:
        console.log('Monday')
    break;
    case day=2:
        console.log('Tuesday')
    break;
    case day=3:
        console.log('Wednesday')
    break;
    case day=4:
        console.log('Thursday')
    break;
    case day=5:
        console.log('Friday')
    break;
    case day=6:
        console.log('Satday')
    break;
}

//Functions:Classic Way( named function )
console.log(' ')
console.log('Function( named function )')
let no3=11;
function sum(no1, no2, no5=1){
    let no4=4;
    console.log('this is sum function')
    let value=no1+no2+no5;
    console.log(`no3=${no3}`)
    console.log(`no4=${no4}`)
    console.log(`no4+no3=${no4+no3}`)
    return value;
}
let add=sum(1,2);
console.log(add);

//Functions:Anonymous function
console.log(' ')
console.log('Function( anonymous function )')
var sumfunc= function(a1, a2){
    console.log('Hi from anon')
    console.log(a1+a2)
}
sumfunc(2,1);

//Functions:Arrow function
console.log(' ')
console.log('Function( arrow function )')
var arrowfunc= (n1, n2) =>{
    console.log('hi from arrow')
    console.log(n1+n2)
}
//also equivalent to
// var arrfunc=() =>'Hi from arrfunc';
arrowfunc(1,2);
// arrfunc();



//Browser Defined Func:
//1)Alert
// alert('This is alert')
//2)confirm
// let result=confirm('Are you sure?');
// console.log(result);
//3)Prompt
let va1=parseInt(prompt('enter no1'));
let va2=parseInt(prompt('enter no2'));

alert(va1+va2);
//parseInt for typecasting string to number
//convert into integer(number) to be exact
//use parseFloat for convert to float(number)
