const Eventemitter = require('events');

var EventEmitter = new Eventemitter();

EventEmitter.on('myEvent', (msg) => {
    console.log(msg);
})

EventEmitter.emit('myEvent', "First Event");