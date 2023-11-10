import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("cli_todo");
console.log("ver 1.0.0 2023-11-10\n");

console.log("format: command:name");

let input = [];

// Listen for lines of input
rl.on("line", (line) => {
    input.push(line);

    // Prompt for the next input
    rl.prompt();
});


rl.question("> ", (answer) => {

    

    rl.close();
});

// This line is important to start the readline process
rl.prompt();
