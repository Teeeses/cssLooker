var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("> ");

var specification = [
    { name: "name", description: "имя сотрудника",  type: "string"},
    { name: "surname", description: "фамилию сотрудника",  type: "string"},
    { name: "patronymic", description: "отчество сотрудника",  type: "string"},
    { name: "department", description: "отдел сотрудника",  type: "string"}    
];

var resultingObject = {};

console.log("Введите имя сотрудника");
rl.prompt();
var currentField = specification.shift();
rl.on("line", function(line) {
        var newLine = line.trim();
        if (newLine === "") {
            console.log("Вы ввели пустую строку!");
        } else {
            resultingObject[currentField.name] = newLine;
            if (specification.length === 0) {
                rl.close();
                callback(resultingObject);
                return;
            } else {
                currentField = specification.shift();
                console.log("Введите", currentField.description);
            }
        }
        rl.prompt();
    }
);

function callback(object) {
    console.log(object);
}
