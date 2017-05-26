require("file-loader?name=index.html!./index.html");

require('./validation');

class EvenMOreMagic {
    constructor(...args) {
        console.log(args[0]);
    }
} 