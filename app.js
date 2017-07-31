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

// If user decides to create a flashcard, the below function runs
function createCard() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of flashcard would you like to create?',
            choices: ['Basic Card', 'Cloze Card'],
            name: 'cardType'
        }
    ]).then(function (appData) {
        // the cardType variable stores the user's choice taken from the cardType inquirer object
        var cardType = appData.cardType;
        console.log(cardType);

        if (cardType === 'Basic Card') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Fill out the front of your card (hint: your question goes here!)',
                    name: 'front'
                },
                {
                    type: 'input',
                    message: 'Now, fill out the back of your card (hint: this is where your answer will go',
                    name: 'back'
                }
            ]).then(function (cardData) {
                // This builds an object that contains the front and back information
                var cardObj = {
                    type: 'BasicCard',
                    front: cardData.front,
                    back: cardData.back
                };
                // pushes the newly-added card into the card array
                library.push(cardObj);
                // writes the updated card array to cardLibrary.json 
                fs.writeFile('cardLibrary.json', JSON.stringify(library, null, 2));

                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Would you like to create another card?',
                        choices: ['Yes, I would.', 'No, thanks.'],
                        name: 'anotherCard'
                    }
                ]).then(function (appData) {
                    if (appData.anotherCard === 'Yes, I would.') {
                        createCard();
                    } else {
                        setTimeout(openMenu, 1000);
                    }
                });
            });
        // else, create a cloze flashcard
        } else {

        }
        })
        }
    })
}