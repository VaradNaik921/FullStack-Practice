let name =`Varad
`;

console.log(name);
console.log(name.length);
console.log(name.trim().length);
console.log(name[0]);

console.log(name.toUpperCase());
console.log(name.toLowerCase());


let test =`This is name of string 'test'`;
console.log(test.includes('name'));
console.log(test.includes('nam2e'));

console.log(test.charAt(6));

console.log(typeof test);//speaciall type of object(string)

test.__proto__.reverse=function(){
    let word=this.split(' ');
    word.reverse();
    return word.join(' ');
}
let output= test.reverse();
console.log(output);


//ASSIGNMENT
//