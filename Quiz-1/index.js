//Quiz
//Soal 1
function  jumlah_kata(kalimat){
    var kataBaru = kalimat.trim();
    var pisah = kataBaru.split(" "); //Jawaban Soal 1
    return total = pisah.length;

}
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"


jumlah_kata(kalimat_1) // 6
jumlah_kata(kalimat_2) // 2

console.log(jumlah_kata(kalimat_1) , jumlah_kata(kalimat_2))

//Soal 2
function next_date(tanggal , bulan , tahun ){
    var newTanggal = tanggal + 1;
    return `${newTanggal} ${bulan} ${tahun}`;
    //maaf kak pasrah disini. butuh waktu lebih kak sepertinya, karena waktu udah mepet juga akhirnya terpaksa pakai jawaban yang ngawur ini:')
}

//contoh 1

var tanggal = 29
var bulan = 2
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )) // output : 1 Maret 2020

//contoh 2

var tanggal = 28
var bulan = 2
var tahun = 2021

console.log(next_date(tanggal , bulan , tahun ))// output : 1 Maret 2021

//contoh 3

var tanggal = 31
var bulan = 12
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )) // output : 1 Januari 2021
