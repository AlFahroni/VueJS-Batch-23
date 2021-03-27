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