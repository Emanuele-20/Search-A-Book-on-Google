const fetch = require('node-fetch');

async function getYourBook(title){
    try{
        const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + title)
        const data = await resp.json()
        const filter = await data.items.slice(0,5)
            .forEach(element => {
            console.log('Title:', element.volumeInfo.title)
            console.log('Author:',element.volumeInfo.authors[0])
            console.log('Publishing Company:',element.volumeInfo.publisher)
            console.log('\n')
        })
        return filter
    } catch (err){
        console.log("Opss, somethind did wrong", err)
    } 
}
    // .catch(answer => console.log("Ops, I can't reach this information"))
    


