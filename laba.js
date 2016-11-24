var fs = require("fs");
var arrayDate = [];
var linesDate = [];

var outputText;

fs.readFile("text.txt", "utf8", function(error, str) {
	if(checkInputDate(str)) {
		findNamesake();
		findPensioners();
		sortPeopleMonths();
	} else {
		console.log("Неверные данные!");
	}
});

function checkInputDate(str) {
	linesDate = str.split(/[\n|\r]+/);
	for(var i = 0; i < linesDate.length; i++) {
		var words = linesDate[i].split(" ");
		if(words.length == 8) {
			var man = {
				lastname: words[0],
				firstname: words[1], 
				middlename: words[2],
				gemder: words[3],
				day: words[4], 
				month: words[5],
				year: words[6], 
				city: words[7]
			};
			arrayDate[i] = man;
		} else {
			return false;
		}
	}
	return true;
}

function findNamesake() {
	outputText = "Однофамильцы: \n";
	for(var i = 0; i < arrayDate.length; i++) {
		var lastnameText = arrayDate[i].lastname;
		var text = "";
		var check = false;
		for(var j = i + 1; j < arrayDate.length; j++) {
			if(lastnameText === arrayDate[j].lastname) {
				text += linesDate[j] + "\n";
				check = true;
			}
		}
		if(check) {
			text += linesDate[i] + "\n";
		}
		outputText += text;
	}
	console.log(outputText);
}

function findPensioners() {
	outputText = "Пенсионеры: \n";
	var now = new Date();
	for(var i = 0; i < arrayDate.length; i++) {
		var dateMan = new Date(arrayDate[i].year, arrayDate[i].month, arrayDate[i].day);

		var year = now.getFullYear() - dateMan.getFullYear();

		if(arrayDate[i].gemder === "жен") {
			if(year >= 55) {
				outputText += linesDate[i] + "\n";
			}
		} 
		if(arrayDate[i].gemder === "муж") {
			if(year >= 60) {
				outputText += linesDate[i] + "\n";
			}
		}
	}
	console.log(outputText);
}

function sortPeopleMonths() {
	for(var i = 0; i < 12; i++) {
		var check = false;
		var peopleText = "";
		for(var j = 0; j < arrayDate.length; j++) {
			if(arrayDate[j].month == i) {
				peopleText += linesDate[j] + "\n";
				check = true;
			}
		}
		if(check) {
			outputText += "Месяц " + i + ": " + "\n";
			outputText += peopleText;
		}
	}
	console.log(outputText);
}
