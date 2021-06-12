
function getYourBook(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
    .then(answer => {
        console.log(answer)
    })
}

