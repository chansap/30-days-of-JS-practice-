// class Person {
//     constructor(firstName, lastName) {
//       console.log(this) // Check the output from here
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh')
//   console.log(person1);


class Animal{
  constructor(name, age, color, leg){
    this.name = name
    this.age = age
    this.leg = leg
    this.color = color
  }

  info_animal(){
    return `${this.name} is having ${this.leg} legs and of age ${this.age}`
  }
}

class Dog extends Animal{
  constructor(nAme, aGe, cOlor, lEg, gEnder){
    super(nAme, aGe, cOlor, lEg)
    this.gEnder = gEnder
  }
  
  info_animal(){
    return `I am in Dog Class`
  }
}

// const dog = new Animal("Dogo",5,"black",4)
// console.log(dog);
// console.log(dog.info_animal());


const test_dog = new Dog("LATTo",20,"green",4,"male")

console.log(test_dog);
console.log(test_dog.info_animal());