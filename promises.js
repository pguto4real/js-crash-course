const posts =
    [{
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {

        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {

        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
    ]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 1000)

}

function createPost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject("Error :Something went wrong")
            }
        }, 2000)
    })
}
// Async/await
// async function init(){
//     await createPost({ title: 'post3', body: 'this is post 3' })
//     getPosts();
// }
// init();

//Async Await with fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    console.log(data)
}
fetchUsers()
// createPost({ title: 'post3', body: 'this is post 3' })
// .then(getPosts)
// .catch(err => console.log(err))
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Good Bye'))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res=>res.json()))

// Promise.all([promise1,promise2,promise3,promise4])
// .then((values)=>console.log(values))
// .catch(err => console.log(err))