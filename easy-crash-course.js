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


console.log(showRating(5));