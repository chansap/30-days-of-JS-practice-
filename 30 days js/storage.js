const o = {
    fName : "Saptarshi",
    lName : "Chandra",
    age : 26
}

o.gender = "Male"

const p = JSON.stringify(o,undefined,4)

sessionStorage.setItem("res",p)

console.log(    JSON.parse( sessionStorage.getItem("res")   )   );

// console.log(sessionStorage.removeItem("res"));

// sessionStorage.clear()