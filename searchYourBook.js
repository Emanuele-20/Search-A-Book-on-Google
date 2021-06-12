const fetch = require('node-fetch');

function getYourBook(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
    .then(answer => {
        return answer.json()
    })
    .then(answer => {
        console.log(answer)
    })
}

getYourBook()