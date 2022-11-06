

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

  console.log(countries.length);
  console.log(countries[0], countries[Math.floor(countries.length/2)], 
                countries[(countries.length)-1]);

  console.log(itCompanies);

  console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], 
  itCompanies[(itCompanies.length)-1]);

  for(let itcomp of itCompanies){
      console.log(itcomp);
  }

  let isThere = itCompanies.indexOf("Microsoft")
//   console.log(isThere);
isThere!= -1? console.log("Company present") : console.log("Company not present");

// console.log( itCompanies.reverse() ); 

// console.log( itCompanies.slice( Math.floor(itCompanies.length/2))  );

itCompanies.shift()
console.log(itCompanies );

itCompanies.pop()
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);

// console.log(r);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.split(" "));
let text1 = text.split(" ")
const mainarr=[]
for(let i of text1){
  if( (i.indexOf(".")!=-1) || ( i.indexOf(",") != -1) ){
    // i.split("").pop()
    // console.log(i.split('').pop());
    let arr = i.split('')
    arr.pop()
    let word = arr.join("")
    // console.log(i);
    mainarr.push(word)
  }
  else{
    mainarr.push(i)
  }
}
console.log(mainarr);
console.log(mainarr.join(" "));
console.log(mainarr.length);
// console.log(text1);