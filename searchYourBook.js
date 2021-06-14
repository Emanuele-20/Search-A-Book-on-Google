const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

const books = []
const readingList = []

async function getYourBook(title){
    try {
        const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + title)
        const data = await resp.json()
        await data.items.slice(0,5)
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
    books.length = 0
    console.log("Your selection is saved")
}


async function start(){

    while(true){
        let question = await readlineSync.question("Hello, select 1 to search a book, select 2 to view yor Reading List, 'exit' to interrupt? \n")
        if (question === "1"){
            let book = await readlineSync.question("Which book are you looking for? \n")
            await getYourBook(book)
            let index = readlineSync.keyInSelect(books, "Which book do you want to save in your reading list?")
            await populateReadingList(index)
        }else if (question === "2") {   
            if (readingList.length == 0){
                console.log("Your reading list is empty")
            } else {
                console.log(`Your Reading List:\n${readingList.join("\n")}`)
            }
        } else {
            if (question === "exit"){
                break;
            }
        }
    } 

};


start();
