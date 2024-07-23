// let count  = 1;
// while (count <= 100){
//     console.log(count);
//     count++
// }

// for(let i = 1;i<= 20 ; i++){
//     if(i%3 == 0){

//         if(i%5 == 0){
//             console.log(i+" Frontend Simplified")
//         }
//         else{
//             console.log(i+" Frontend")
//         }
//     }
//     else if(i%5  == 0){
//         console.log(i+" Simplified")
//     }
//     else
//     {
//         console.log(i)
//     }
// }
// let data = "Frontend Simplified";
// for(let i = 0;i< data.length ; i++){
//     console.log(data[i])
// }

// function convertCelciusToFarenheit(param){
//     let f = param * 1.8 +32
//     return f
// }
// console.log(convertCelciusToFarenheit(30))

let grades1 = ['A+', 'A', 'FAIL']
let grades2 = ['FAIL', 'FAIL', 'B']
let grades3 = ['FAIL']

function filterFail(gradesArray) {

    return newArr = gradesArray.filter(element => element !== 'FAIL')
}
function filterFail2(gradesArray) {
    let newArray = [];
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] !== 'FAIL') {
            newArray.push(gradesArray[i])
        }
    }
    return newArray
}
console.log(filterFail2(grades1))
console.log(filterFail2(grades2))
console.log(filterFail2(grades3))

let dollars = [1, 5, 10, 3];
let dollars2 = [0, 10, 20];
const newDollar = dollars2.map(element => element * 100)
console.log(newDollar)
const newDollar1 = [];
for (let i = 0; i < dollars.length; i++) {

    newDollar1.push(dollars[i] * 100)

}
console.log(newDollar1)
// console.log(filterFail(grades1))
// console.log(filterFail(grades2))
// console.log(filterFail(grades3))

const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(Object.entries(person))
console.log(Object.getOwnPropertyNames(person))
console.log(Object.getOwnPropertyDescriptors(person))
console.log(Object.getPrototypeOf(person))
// let userdata = fetch("https://jsonplaceholder.typicode.com/users/1").then( response=> {return response.json()}).then(data=> {data));
// console.log(userdata)


fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))
async function main1(){
    try {
        const status = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await status.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
   
   
    
}
function getSubscriptionStatus() {
    let data = new Promise((resolve, reject) => {
        resolve("hdhdhd")
    });
    // console.log(await data)
    return data;
   
}

function getVideo(subScriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subScriptionStatus === "VIP") {
            resolve("Show Video");
        }
        else if (subScriptionStatus === "FREE") {
            resolve("Show Trailer")
        }
        else {
            reject("No video")
        }
    })
}
async function main() {
    // 
    // const status = await fetch("https://jsonplaceholder.typicode.com/users/1");
    // const data = await status.json()
    const status = await getSubscriptionStatus();
    console.log(status)
    try {
        const getVideoMessage = await getVideo(status)
    console.log(getVideoMessage)
    } catch (error) {
        console.log(error)
    }
    
 
    // const data = await status.json()

}
main1()
main();