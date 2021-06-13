const fetch = require('node-fetch');

async function getYourBook(){
    const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=pinocchio')
    const data = await resp.json()
    const filter = await data.items.slice(0,5)
        .forEach(element => {
        console.log(element.volumeInfo.title)
        console.log(element.volumeInfo.authors[0])
        console.log(element.volumeInfo.publisher)
        console.log('\n')
    })
    return filter
}
    // .catch(answer => console.log("Ops, I can't reach this information"))
    


