const readBooksPromise = require("./promise")

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
readBooksPromise(10000, books[0])
.then(sisaWaktu => {
    readBooksPromise(sisaWaktu, books[1]) //Jawaban Soal 2
    .then(sisaWaktu => {
        readBooksPromise(sisaWaktu,books[2])
        .then(sisaWaktu => {
            readBooksPromise(sisaWaktu, books[1])
            .catch(sisaWaktu => console.log('Time is up'))
        })
    })
})