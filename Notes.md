## This challenge will be attack using NodeJS.

### Used Trello card in order to set and track all the steps to follow and Notion to organize the email, the tech test and the review test.

### Pruduction Code

1. Create a folder
2. Initialize Git
3. Create README file and a Notes file
4. Inizialize Npm
5. Create function for fetch an API
6. Add npm "node-fetch" package to use and run " fetch " on my command line application
7. Manage the promise to console log the title, authors and publishing company for the first 5 books

```

    fetch('https://www.googleapis.com/books/v1/volumes?q=Invisible Man')
    .then(answer => {
        return answer.json()
    })
```

8. Trying to implement with async function

```
async function getYourBook(){
    const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
    const data = await resp.json()
    const filter =  ....
    })
    return filter
}
```

9. Add "catch" and "try" to manage the error

```
async function getYourBook(title){
    try{
        ...
        })
        return filter
    } catch (err){
        console.log("Opss, something did wrong", err)
    }
}
```

10. Add readline package to interact with the user
11. Add start() method to let the user comunicate better with the program
12. Install the "read line Sync" package to acquire the user input
13. Automatize the process with a "while" loop, implementing a more friendly user experience

## Refactoring after the first submission

14. In order to have a shorter "getYourBook" method, I have extrapolated many actions into different other functions. Those functions will be now invoked when needed and the code will be more organized and readable
15. Now the result of the "promise" will be filtered on its calling and not with the "slice" method anymore
16. Created two new folder "src" and "test" in order to separate the pruduction code and the test.
17. Created a couple of tests
