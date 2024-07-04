const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

const userEventEmitter = new UserEventEmitter();

userEventEmitter.on('userRegistered', (user) => {
    console.log(`User registered: ${user.name}`);
    sendWelcomeEmail(user);
});

function sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
}

function registerUser(name, email) {
    const user = { name, email };
    console.log('Registering user...');

    userEventEmitter.emit('userRegistered', user);
}

registerUser('dhaval', 'dhaval75@example.com');
registerUser('Bob', 'bob@example.com');


const event = require('events');

class Dog extends event.EventEmitter {}
class Cat extends event.EventEmitter {}

const cat = new Cat();
const dog = new Dog();

dog.on('bark', () => {
    console.log('Woof! Woof!');
});

cat.on('bark', () => {
    console.log('Meow! Meow!');
});

dog.emit('bark');