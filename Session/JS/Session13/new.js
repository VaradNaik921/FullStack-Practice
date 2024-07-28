let animals = [
    'Tiger',
    'Dog',
    'Cow',
];

console.log(animals);
console.log(`Array length = ${animals.length}`);

let animals2 = new Array();   //--blank array
console.log(animals2);

animals.push('Item2');//adds another data
console.log(animals);
animals.pop();//removes last data
console.log(animals);
animals.shift();//removes first data
console.log(animals);
animals.unshift('Tiger');//adds to first data
console.log(animals);

//Itterate on array
console.log(`itterating using for`)
for(let i=0; i<animals.length; i++){
    console.log(animals[i]);
}

////foreach callbacks function for each itteration
console.log(`itterating using forEach`)
const iteratforeach = function(a,b,c){//check details by hovering on forEach in VS Code
    console.log(a,b,c);
}
animals.forEach(iteratforeach);
const res = animals.forEach(function(a,b){
    console.log(a,b);
})

console.log(typeof animals);//in js array are special type of objects


const result = animals.find((animal) => {
    return animal ==='Cow';  
})
console.log(result);

// animals2= [...animals];
// let vehicles = [...animals];//copy using spread op
// let vehicles2 = animals2;
// console.log(`animals`, animals);
// console.log(`vehicles`,vehicles);
// console.log(`animals2`, animals);
// console.log(`vehicles2`,vehicles);
// vehicles.push('bike');
// vehicles2.push('bike');
// console.log(`animals`, animals);
// console.log(`vehicles`,vehicles);
// console.log(`animals2`, animals);
// console.log(`vehicles2`,vehicles);
// vehicles[3].push('bike');
// console.log(`animals`, animals);
// console.log(`vehicles`,vehicles);

// animals[10]=`10`;
// console.log(animals);

animals.__proto__.random= function(){
    const randomIndex = Math.ceil(Math.random()*this.length-1);
    return this[randomIndex] ;
}
let output = animals.random();
console.log(output)


//Optional assignment:
//Crate a object with your name that can be used as arrayor data structure like stack/array
//need to have push, pop, empty

//