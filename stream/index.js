/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 * Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
 * Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).
 */

const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15,
});

readableStream.on('readable', () => {
    try {
        // console.log(`${readableStream.read()}`)
        // console.log(readableStream.read())
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
})

readableStream.on('end', () => {
    console.log('Done');
});

readableStream.on('error', (err) => console.log('error', err.message));

/**
 * Run: node ./stream/index.js
 */