const dog ={
    name: "Jackson", 
    legs: 4, 
    color:"brown", 
    age:5,
    bark : function(){
        return "woof woof"
    }
}

dog.breed = "GSD"
dog.getDogInfo = "There is many thing we dont know about dogs."
console.log(dog.breed);


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let arr = Object.values(users)

//   let newArr = [];
//   arr.filter( (obj) => {
//       obj.isLoggedIn === true && obj.points >= 50 ? newArr.push(obj): console.log();
//   })
//   console.log(newArr);
//   let t =  arr.findIndex( (obj) => {
//     return obj.isLoggedIn === true && obj.points >= 50 ? newArr.push(obj): console.log();
// })
  


  const indexArr = []
  arr.forEach( (obj, i) =>{
    obj.isLoggedIn === true && obj.points >= 50 ? indexArr.push(i): console.log();
  })
//   console.log(indexArr);

  let keys = Object.keys(users)
//   console.log(keys);

  for(let key of indexArr){
      console.log(keys[key]);
  }


  
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [f , e , s , d] = countries
console.log(f , e, s, d);






//   newArr.map( (oneObj) => {
//       users.filter( (user) =>{
//           user
//       })
//   })

