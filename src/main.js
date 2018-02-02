require("file-loader?name=index.html!./client/index.html");

require('./validation');

require('./client/js/index');

class EvenMOreMagic {
    constructor(...args) {
        console.log(args[0]);
    }
} 