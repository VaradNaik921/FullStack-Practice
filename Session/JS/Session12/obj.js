let obj1 = {
    //key1: "value", key2:"Value" 
    name:"Naik",
    age:19,
    name:"Varad",//overrides previous key value
    //for multiword key use 'word word1' 
    'clg name':'VJTI'
};//object syntax(object literal way)
console.log(obj1);
console.log(obj1['age']);
console.log(obj1['clg name']);
console.log(`${obj1.name} is ${obj1.age} years old, studying in ${obj1['clg name']}`);

obj1.age=20;
obj1.cgpa=9.6;
obj1.key1=1021;
console.log(obj1);
console.log(`HAPPY BIRTHDAY, ${obj1.name} is now ${obj1.age} years old, studying in ${obj1['clg name']} and got pointer ${obj1.cgpa}`);

delete obj1.cgpa;
console.log(obj1);

//check for existence using if else or in keyword
if(obj1.cgpa){
    console.log("present");
}
else{
    console.log("absent");
}


console.log('cgpa' in obj1);

//printing all keys and value values in obj

for(key in obj1){
    console.log(key, obj1[key]);
    //since key is dynamic variable use square bracket for display
}

//no of keys and values using js keywords
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

//nesting of object

let obj2={
    name:'Naik',
    obj1:obj1,
    hobbies: {
        technical:{
            a:'robotics',
            b:'full stack'
        }
    }
};

console.log(obj2);
console.log(obj2.obj1.name);
//checking of chain
console.log(obj2?.obj3);//optional chaining
if(obj2.obj1 && obj2.obj1.obj3){
    console.log(obj2.obj1.obj3);
}
else{
    console.log('not found');
}
//obj2.obj1.obj3 returns value undefined which is false value
let bike={
    
};
let car={
    wheel:4,
    color:'red'
};

bike= Object.assign({},car);
bike.wheel=2;
console.log(car);
console.log(bike);
//LODASH LIBRARY (CHECK IT OUT)
