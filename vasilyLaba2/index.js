var fs = require("fs");
var readLine = require('readline');

var readInterface = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    }),

fs.readFile("dictionary.txt", "utf8", function(error, str) {
	if(checkInputDate(str)) {
		console.log('Для смены языка введите команды(ru-en или en-ru)\nВведите слово для перевода: ');
	} else {
		console.log("Неверные данные!");
	}
});

function checkInputDate(str) {
	linesDate = str.split(/[\n|\r]+/);
	for(var i = 0; i < linesDate.length; i++) {
		var words = linesDate[i].split("|");
		console.log(words);

	}
}