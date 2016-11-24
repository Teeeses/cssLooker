var 
readline = require("readline"), 
rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
}), 
reverseString = function(str) { 
return str.split("").reverse().join(""); 
}, 
createAnObject = function(data) { 
return { 
field: data, 
decoding: function() { 
var 
words = this.field.split(/\s+/), 
decodingWords = words.map(function(str) { 
return reverseString(str); 
}); 

return decodingWords.join(" "); 
} 
}; 
}; 

rl.on("line", function(line) { 
var decodingObj = createAnObject(line); 

console.log(decodingObj.decoding()); 
rl.close(); 
}); 
console.log('Введите текст для дешифровки'); 
rl.prompt();