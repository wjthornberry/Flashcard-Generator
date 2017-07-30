// Requires fs
var fs = require('fs');

// Constructor
function ClozeFlashcard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '_____');
    this.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: 'cloze'
        };
        // Adds card to log.txt
        fs.appendFile('log.txt', JSON.stringify(data) + ';', 'utf8', function(err) {
            // If err, log it
            if (err) {
                console.log(err);
            }
        });
    };
}

module.exports = ClozeFlashcard;