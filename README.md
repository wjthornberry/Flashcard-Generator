# Flashcard Generator
A basic flashcard application that runs on the backend with Node.js. It is essentially an API that, via a CLI, allows users to create two different types of flash cards — one typical, the other a "cloze," where part of the text is hidden.

## Getting started

1. Open your command line (CLI) program (*e.g.*, Bash, Terminal, etc.)

2. Clone or fork this repo to your computer (hint: you will need [Node.js](https://nodejs.org/en/download/) installed to run this app.)

3. Type
```
npm install
```
to install the required node packages

OR

Install them manually:

   * [Inquirer](https://www.npmjs.com/package/inquirer) - asks the user questions and notes the response.

   * [Colors](https://www.npmjs.com/package/colors) - adds color to text to enhance readability.

4. To run the application, type 
```
node app.js
```
and follow the prompts to have the time of your life — you'll never look at flashcards the same way again or your money back. 

## Options

* `Create` – creates a basic or cloze flashcard and adds it to the deck.

* `Use All` – runs through all of the flashcards. 

* `Random` – randomly picks a card.

* `Shuffle` – shuffles the deck.

* `Show All` – prints all current cards.

* `Exit` – exits app and returns user to his/her/their CLI.

## Copyright

Jake Thornberry (C) 2017.


