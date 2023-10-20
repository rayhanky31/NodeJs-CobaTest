console.log('Hello word')

//Impoert libarary os
const os = require('os')

//Import class luas segitiga
const luasSegitiga = require('./segitiga')
console.log(`Free Memory:`, os.freemem())
console.log("sahsjashj")
console.log(luasSegitiga(19, 3))


//Baca Modul Bernama fs 
//Read 
const fs = require('fs')
const isi = fs.readFileSync('./teks.txt', 'utf-8')
console.log(isi)

//Write
fs.writeFileSync('./nulis.txt', "I Love Binar")