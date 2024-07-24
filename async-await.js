// console.log("Synchronous 1")
// setTimeout(_=>console.log(`time out 2`),2)
// Promise.resolve().then(_=>console.log(`promise 3`))
// console.log("Synchronous 4")

// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(user=>{
//         throw new Error('uh oh');
//         return user})
//       .then(user => console.log('*',user.title))
//       .catch(err=>console.log(err))

//       console.log('synchronous')


const tick = Date.now();
const log = (v) => console.log(`${v} \n elapsed: ${Date.now() - tick}ms`)

// const codeBlocker = () => {

//     // return new Promise((resolve, reject) => {
//     //     let i = 0
//     //     while (i < 1000000000) {
//     //         i++
//     //     }
        
//     //     resolve("'billion loops done'")
//     // });
//     return Promise.resolve().then(v=>{
//         let i = 0
//         while (i < 1000000000) {
//             i++
//         }
        
//         return "'billion loops done'"
//     })
   
// }
// log('synchronous1')
// codeBlocker().then(log)
// log('synchronous2')

//use the async keyword to return a promise
const getFruit= async(name)=>{
const fruits={
    pineapple:"P",
    peach:"Pe",
    strawberry:"S",
}
// await log(1000);
return  fruits[name];
// return Promise.resolve(fruits[name]);
}

const makeSmothie= async(name)=>{
   const a = await getFruit('pineapple');
   const b = await getFruit('strawberry');
   return Promise.all([a,b])
//    return [a,b]
    }
    makeSmothie().then(console.log)
getFruit('peach').then(console.log)