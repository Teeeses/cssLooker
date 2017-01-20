var Word = function(info) {
    this._ruWord = info.ruWord;
    this._engWord = info.engWord;
};

Word.prototype.getData = function() {
    return {
        ruWord: this._firstName,
        engWord: this._engWord
    }
};

module.exports = Word;