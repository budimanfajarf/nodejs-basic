/**
 * TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
 * TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
 * TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
 * TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
 */

// TODO 1
const { EventEmitter } = require('events')

const sayHappyBirthday = (name) => console.log(`Happy birthday ${name}!`)
const tellAge = (age) => console.log(`Your age is ${age}`)

const birthdayEventListener = ({ name, age }) => {
    sayHappyBirthday(name)
    tellAge(age)
}

// TODO 2
myEmitter = new EventEmitter();

// TODO 3
myEmitter.on('birthday', birthdayEventListener)

// TODO 4
myEmitter.emit('birthday', { name: 'budi', age: 25 })

/**
 * Run: node ./events/index.js
 */