let car={
    name:'car',
    wheels:4,
    breaks:{
        total:1
    },
    printWheels: function(){
        console.log(this.name +" "+ this.wheels)
    }
};

let bike={...car};
bike.wheels=2;
bike.name='bike'
car.printWheels();
bike.printWheels();

const mycar = new Object(car);
mycar.wheels=6;
mycar.printwheels();