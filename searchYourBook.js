const fetch = require('node-fetch');

async function getYourBook(){
    const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
    const data = await resp.json()
    const filter =  await data.items.forEach(el => {
        console.log(el.volumeInfo.title)
        console.log(el.volumeInfo.authors[0])
        console.log(el.volumeInfo.publisher)
        console.log('\n')
    })
    return filter
    
}
    // .catch(answer => console.log("Ops, I can't reach this information"))
    


