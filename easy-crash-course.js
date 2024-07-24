function showRating(rating){
    let full_star = new Array(Math.floor(rating)).fill("*").join(' ')
    // let full_star1 = new Array(Math.floor(3)).map(elem => '*')
    // console.log(full_star1)
    // .replaceAll(',',' ')
    if(!Number.isInteger(rating))
{
    full_star += " ."
}
return full_star;
}
function sortLowToHigh(data){
    // let i = 0
    let full_star =data.sort((a,b)=>{
        // i++
//         console.log(`is ${a} greater than ${b}? ${a>b} return ${a>b?b:a}`)
// console.log(i+' =>'+a,b)
return a-b
    })
    return full_star
}

function sortObjectLowToHigh(data){
    
    let full_star =data.sort((a,b)=> a.price-b.price )
    return full_star
}
console.log(sortObjectLowToHigh([{id:1,price:10},{id:2,price:5},{id:3,price:25}]));
console.log(sortLowToHigh([5,7373,933,1781,393,474]));
console.log(showRating(5));