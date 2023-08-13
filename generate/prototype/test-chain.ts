class Dog {
	constructor(name) {
	  this.name = name;
	}
  
	bark() {
	  console.log("Woof!");
	}
  }
  
  class SuperDog extends Dog {
	constructor(name) {
	  super(name);
	  console.log(SuperDog.__proto__[0])
	}
  
	fly() {
	  console.log(`Flying!`);
	}
  }
  
  const dog1 = new SuperDog("Daisy");
  dog1.bark();
  dog1.fly();

  console.log(dog1.__proto__);