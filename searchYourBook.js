const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
const books = []
const readingList = []

async function getYourBook(title){
    try{
        const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + title)
        const data = await resp.json()
        const filter = await data.items.slice(0,5)
            .forEach(element => {
            books.push(`Title: ${element.volumeInfo.title} -  `+ `Author: ${element.volumeInfo.authors[0]} -  `+ `Publishing Company: ${element.volumeInfo.publisher}`)
        })
        //console.log(books.join("\n"))
    } catch (err){
        console.log("Opss, something did wrong", err)
    } 
}

function populateReadingList(index){
    readingList.push(books[index])
    console.log("Your selection is saved ") 
}


async function start(){
    let book = await readlineSync.question("Hello, which book are you looking for? \n")
    await getYourBook(book)
    let index = await readlineSync.keyInSelect(books, "Which book do you want to save in your reading list?")
    await populateReadingList(index)
    console.log(`Your Reading List: ${readingList.join("\n")}`)
}

start()