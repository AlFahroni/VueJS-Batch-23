//Penugasan hari ke 3 (Pengenalan Javascript)
//Soal 1
var pemisah = "==============================="
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

console.log(pemisah)
console.log('Jawaban Soal 1')
console.log(pertama.substr(0,5).concat(pertama.substr(12,7)).concat(kedua.substr(0,18))) //Jawaban Soal 1

//Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);

console.log(pemisah)
console.log('Jawaban Soal 2')
operasi = (intPertama + intKeempat - intKetiga) * intKedua //Jawaban Soal 2
console.log(operasi) //Jawaban Soal 2

//Soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0,3);
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31);

console.log(pemisah)
console.log('Jawaban Soal 3')
console.log('Kata Pertama: ' + kataPertama); //Jawaban Soal 3
console.log('Kata Kedua: ' + kataKedua); //Jawaban Soal 3
console.log('Kata Ketiga: ' + kataKetiga); //Jawaban Soal 3
console.log('Kata Keempat: ' + kataKeempat); //Jawaban Soal 3
console.log('Kata Kelima: ' + kataKelima); //Jawaban Soal 3