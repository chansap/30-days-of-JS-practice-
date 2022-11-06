const countriesAPI = 'https://restcountries.com/v2/all'

// fetch(countriesAPI)
// .then( (response) => {
//     // console.log(response);
//     console.log(response.json())
// })
// .then( resP => {
//     console.log(resP)
// })
// .catch(err => console.log("err = ",err))


// const fetchData = async function(){

//     let response = await fetch(countriesAPI)
//     let country = await response.json()
//     // console.log(country);
    
//     for(let count of country){

//     console.log("======================");
//     console.log(count.name);
//     console.log(count.capital);
//     console.log("Language");
//     for(let language of count.languages){
//         console.log(language.name);
//     }
//     console.log(count.population);
//     console.log(count.area);

//     }
    
//     // try{
//     // let response = await fetch(countriesAPI)
//     // let country = await response.json()
//     // console.log(country);
//     // }
//     // catch(err){
//     //     console.log(err);
//     // }
// }
// fetchData()

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function catty(){
    let response = await fetch(catsAPI)
    let resJson = await response.json()     /// response.json() gives actual data
    console.log(resJson);
    let sum = 0
    let count = 0

    for(let cat of resJson){
        console.log(cat.name);
        console.log(cat.weight.metric ); 
    }
}
catty();    