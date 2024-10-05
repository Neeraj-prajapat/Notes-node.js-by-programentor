// Events Module
// NOde.js has a built-in module, called "Events".
// where you can create-, fire-, and listen for- your own events.

// Example 1:- REgistering for the event to be fired only one time using once.

// Example 2:- Create an event emitter instance and register a couple of callbacks 

// Example 3:- Registering for the event with callbacks parameters

//? Facts:- what we can perform from this event
//ish Node.js ki help se hum log ek button bana ke yadi ush pr koi click karega tho ek event se hum log  kai saare pop aaye e.g. alert, any popup message, and also in conlsole or any other



//? Way:-1
const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log("your name is vinod")
})
event.emit('sayMyName')

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage", 200, "ok")

myName(200, ['ok']); 


//? Way:-2
// const event = require("event");
// const EventEmitter = new event.EventEmitter();