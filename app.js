// Requires fs
var fs = require('fs');

// Requires 'inquirer' package – gathers user input
var inquirer = require('inquirer');

// Requires use of basic flashcard
var BasicCard = require('./basic-card.js');

// Requires use of cloze flashcard
var ClozeCard = require('/cloze-card.js');

// Requires flashcard library
var library = require('./cardLibrary.json');

// Requires 'colors' package
var colors = require('colors');

var drawnCard;
var readCard;
var count = 0;

// App starts. Give user option to either create new flashcards or use the existing ones
function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: '\nHi, there! What would you like to do with flashcards?',
            choices: ['Create New Ones', 'Use All', 'Randomize Them', 'Shuffle Them', 'Show All', 'Exit'],
            name: 'menuOptions'
        }
    ]).then(function (answer) {
        var waitMsg;

        switch (answer.menuOptions) {
            case 'Create New Ones':
                console.log('Great! Let\s make some new flashcards!');
                waitMsg = setTimeout(createCard, 1000);
                break;
            
            case 'Use All':
                console.log('Let\'s see what\'s in this deck, shall we?');
                waitMsg = setTimeout(askQuestions, 1000);
                break;
            
            case 'Randomize Them':
                console.log('Hang tight — picking a random card from the deck. Please hold.');
                waitMsg = setTimeout(randomCard, 1000);
                break;
            
            case 'Shuffle Them':
                console.log('Shuffling these cards! Let\'s see if I remember how to do this.');
                waitMsg = setTimeout(shuffleDeck, 1000);
                break;

            case 'Show All':
                console.log('Printing all cards in your deck for you to see.');
                    waitMsg = setTimeout(showCards, 1000);
                    break;
            
            case 'Exit':
                console.log('See you next time!');
                return;
                break;
            
            default:
                console.log('');
                console.log('Sorry, I\'m not sure what you mean.');
                console.log('');
        }
    });
}