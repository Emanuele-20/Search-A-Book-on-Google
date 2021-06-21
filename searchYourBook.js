const fetch = require("node-fetch");
const readlineSync = require("readline-sync");

const books = [];
const readingList = [];

async function getYourBook(title) {
	try {
		const resp = await fetch(
			"https://www.googleapis.com/books/v1/volumes?maxResults=5&q=" + title
		);
		const data = await resp.json();
		data.items.forEach((element) => {
			books.push(
				`Title: ${element.volumeInfo.title} - ` +
					`Author: ${element.volumeInfo.authors[0]} - ` +
					`Publishing Company: ${element.volumeInfo.publisher}`
			);
		});
	} catch (err) {
		console.log("Opss, something did wrong", err);
	}
}

function populateReadingList(selectedBook) {
	readingList.push(books[selectedBook]);
	//books.length = 0;
	console.log("Thank you for your selection");
}

async function start() {
	try {
		console.log("Hello and Welcome");
		while (true) {
			const question = readlineSync.question(
				"Please, select 1 to search a book, " +
					"select 2 to view yor Reading List, digit 'exit' to interrupt?\n"
			);
			if (question === "1") {
				const book = readlineSync.question("Which book are you looking for?\n");
				await getYourBook(book);
				const selectedBook = readlineSync.keyInSelect(
					books,
					"Which book do you want to save in your reading list?\n"
				);
				populateReadingList(selectedBook);
				books.length = 0;
			} else if (question === "2") {
				if (readingList.length === 0) {
					console.log("Your reading list is empty");
				} else {
					console.log(`Your Reading List:\n${readingList.join("\n")}`);
				}
			} else {
				if (question === "exit") {
					console.log("Thank you for using this program ");
					break;
				}
			}
		}
	} catch (err) {
		console.log("An error just happened, sorry", err);
	}
}

start();
