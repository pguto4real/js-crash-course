// function showRating(rating){
//     let full_star = new Array(Math.floor(rating)).fill("*").join(' ')
// let full_star1 = new Array(Math.floor(3)).map(elem => '*')
// console.log(full_star1)
// .replaceAll(',',' ')
//     if(!Number.isInteger(rating))
// {
//     full_star += " ."
// }
// return full_star;
// }
// function sortLowToHigh(data){
// // let i = 0
// let full_star =data.sort((a,b)=>{
// i++
//         console.log(`is ${a} greater than ${b}? ${a>b} return ${a>b?b:a}`)
// console.log(i+' =>'+a,b)
// return a-b
//     })
//     return full_star
// }

// function sortObjectLowToHigh(data){

//     let full_star =data.sort((a,b)=> a.price-b.price )
//     return full_star
// }
// console.log(sortObjectLowToHigh([{id:1,price:10},{id:2,price:5},{id:3,price:25}]));
// console.log(sortLowToHigh([5,7373,933,1781,393,474]));
// console.log(showRating(5));

async function fetchPostByUsers(userId) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data.filter((element)=>element.userId === userId)
    // console.log(JSON.parse(JSON.stringify(data)))
    // var contact = data.JSON.parse();
    // let newData = [];

    // const theIds = data.map((element) => {
    //     if (element.userId == userId) {
    //         newData.push(element)
    //     }
    // }

    // );
    // return newData;

}

async function firstSixIncomplete(noOfPost) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    
    let output = ''

    const incompleteData = data.filter((element)=>!element.completed).slice(0,noOfPost)
    // data.forEach((post, index) => {
    //     if(i<noOfPost && !post.completed){
    //         incompleteTodos.push(post)
    //                 output += `<li>Post Id: ${post.id} => Post Title: ${post.title}</li>`;
    //                 i++;
                
    //     }
    // })
    console.log(incompleteData)
    incompleteData.forEach((post, index) => {
      
                    output += `<li>Post Id: ${post.id} => Post Title: ${post.title}</li>`;
                
    })

    document.body.innerHTML = output

}

firstSixIncomplete(10)
// fetchPostByUsers(4)
// fetchPostByUsers(5).then(console.log)