const message = (name) => {
    console.log(`Hello ${name}`);
}

// message('JavaScript');

// console.log(Object.getOwnPropertyNames(global));
// console.log(process.env);
// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];

// Run in terminal: node index.js budiman fajar
console.log(`Hello ${firstName} ${lastName}`);
