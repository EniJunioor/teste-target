const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    return str.split("").reverse().join(""); 
}

rl.question("Digite uma string para inverter: ", (inputString) => {
    console.log("String invertida:", inverterString(inputString));
    rl.close();
});
