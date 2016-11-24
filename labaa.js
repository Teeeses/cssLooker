var readline = require("readline"), 

rl = readline.createInterface({ 
	input: process.stdin, 
	output: process.stdout 
}),  
reverseText = function(str) {
	var returnStr = str.split("");
	returnStr = returnStr.reverse();
	returnStr = returnStr.join("");
	return returnStr; 
},
createDecodingObject = function(data) { 
	return { 
		field: data, 
		decoding: function() { 
			var words = this.field.split(/\s+/), 
			decodingWords = words.map(function(str) { 
				return reverseText(str); 
			}); 

		return decodingWords.join(" "); 
		} 
	}; 
};


rl.on("line", function(line) { 
	var decodingObject = createDecodingObject(line); 
	console.log(decodingObject.decoding()); 	
	rl.close(); 
}); 

console.log('Введите текст который необходимо дешифровать'); 
rl.prompt();