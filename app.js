console.log('Starting app.js');
//fs means file system
//os means operating system


//load in built in module
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

//using the function add
console.log('Result:', notes.add(9, -2));
