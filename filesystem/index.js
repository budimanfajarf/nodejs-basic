// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs');
const path = require('path');

const handleReadfile = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log('Asynchronous:');
    console.log(data);
};

/**
 * Read file - asynchronous
 */
fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', handleReadfile);

/**
 * Read file - synchronous
 */
const data = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'UTF-8');

console.log('Synchronous:');
console.log(data);

/**
 * Run: node ./filesystem/index.js
 * Tips: Anda bisa gunakan method path.resolve(__dirname, 'notes.txt'); Dari core modules path dalam menetapkan alamat berkas secara lengkap dan dinamis.
 */