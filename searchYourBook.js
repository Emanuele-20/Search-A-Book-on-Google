const fetch = require('node-fetch');

function getYourBook(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=Invisible Man')
    .then(answer => {
        return answer.json()
    })
    .then(answer => {
        for(let i = 0; i < 5; i++){
            console.log(answer.items[i].volumeInfo.title)
            console.log(answer.items[i].volumeInfo.authors[0])
            console.log(answer.items[i].volumeInfo.publisher)
            console.log('\n')
        }
    })
    //.catch(answer => console.log("Ops, I can't reach this information"))
}

