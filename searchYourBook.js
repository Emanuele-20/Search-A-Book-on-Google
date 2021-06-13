const fetch = require('node-fetch');

function getYourBook(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
    .then(answer => {
        return answer.json()
    })
    .then(answer => {
        console.log(answer.items[0].volumeInfo.title)
        console.log(answer.items[0].volumeInfo.authors[0])
        console.log(answer.items[0].volumeInfo.publisher)
    })
}

