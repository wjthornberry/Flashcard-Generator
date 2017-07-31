// Constructor function for the cloze flashcard
function ClozeCard(text, cloze) {
    this.text = text.split(cloze);
    this.cloze = cloze;
};

// Constructor creates a prototype of ClozeCard
// returns the question missing cloze
function ClozeCardPrototype() {
    this.clozeRemoved = function () {
        return `${this.text[0]} ${this.text[1]}`;
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 