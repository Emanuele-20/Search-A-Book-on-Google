const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

async function getYourBook(title){
    try{
        let books = []
        const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + title)
        const data = await resp.json()
        const filter = await data.items.slice(0,5)
            .forEach(element => {
            books.push('Title:', element.volumeInfo.title)
            books.push('Author:',element.volumeInfo.authors[0])
            books.push('Publishing Company:',element.volumeInfo.publisher)
            console.log('\n')
        })
        return books
    } catch (err){
        console.log("Opss, something did wrong", err)
    } 
}

// async function start(){
//     let chose = await readlineSync.question("Hello, which book are you looking for? ")
//     getYourBook(chose)
// }

// start()