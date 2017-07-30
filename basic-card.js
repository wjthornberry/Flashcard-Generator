// Requires fs
var fs = require('fs');

// Constructor
function BasicFlashcard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        // The basic flashcard object to be appended
        // to file
        var data = {
            front: this.front,
            back: this.back,
            type: 'basic',
        };
        // Adds card to log.txt
        fs.appendFile('log.txt', JSON.stringify(data) + ';' 'utf8', function(err) {
            // If there is an error, log it
            if (err) {
                console.log(err);
            }
        })
    };
}