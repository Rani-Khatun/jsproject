//normal function
 function myfunc(a,b){

    return a+b;
 }

var d=myfunc(20,30);
console.log(d);


//or
// let hello = "";

 let hello = function() {
  return "Hello World!";
}

 
 console.log(hello);


//arrow function
/*

let myFunction = (a, b) => a * b;




console.log(myFunction(23,10));


const actors={

    name:"salman khan",
    name2:"srk",
    age: 58,
    address:"mumbai",

    name4:function value(){
     return this.name2+ " " + this.age|;
    }

};

*/







const person = {
    firstName: "tamim",
    lastName: "Iqbal",
    id: 5566,
    fullName : function() {
      return this.firstName +" " + this.lastName;
    }
  };



 console.log(person.fullName());



 class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ',"<br>" it is a ' + this.model;
    }
  }
  
 let myCar = new Model("audi", "Mustang");
 let mycar1=new Model("bmw","Ferrari");

//  console.log(myCar.show);
 document.getElementById("demo").innerHTML = myCar.show();
 document.getElementById("demo").innerHTML = mycar1.show();