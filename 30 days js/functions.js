function fullName(fName, lName){
    console.log(`My full Name is ${fName} ${lName}`);
}

fullName('Saptarshi', 'Chandra')


function densityFunc(mass, gravity=9.8) {
    console.log(mass*gravity);
}

densityFunc(87)


const arr = [8,5,3,6,1]
function printArray(arru) {
    for (const iterator of arru) {
        console.log(iterator);
    } 
}

printArray(arr)

function showDateTime() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
}

showDateTime()

let summation=0
// function sum() {
//     for (let index = 0; index < arguments.length; index++) {
//         summation+=arguments[index]
//     }
//     console.log(summation);
// }



const sum = (...args) => {
    for (let index = 0; index < args.length; index++) {
        summation+=args[index]
    }
    console.log(summation);
}

sum(1, 2, 3, 4)