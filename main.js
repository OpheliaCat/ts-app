"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name: ', function (name) {
    rl.write("Hello, ".concat(name, "!"));
    rl.prompt();
    //console.log(`Hello, ${name}!`);
    rl.close();
});
