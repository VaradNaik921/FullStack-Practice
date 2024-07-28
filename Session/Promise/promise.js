let sum = new Promise(function(resolve, reject){
    let sum = 1 + 1;

    resolve(sum);
})

console.log('Sum Process will start');

sum.then(function(result){
    console.log(result);
}).catch(function(){
    console.log('failed');
})

console.log('Sum Process completed');