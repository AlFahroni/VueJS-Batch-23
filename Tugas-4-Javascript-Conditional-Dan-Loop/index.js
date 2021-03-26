//Penugasan hari ke 4 (Conditional and Looping)
//Soal 1
var pemisah = "========================================"
console.log(pemisah)
console.log("Jawaban No 1")

var nilai = 75;

if (nilai >= 85) {
    console.log(`Nilainya adalah ${nilai} maka indeksnya A`)
} else if (nilai >= 75) {
    console.log(`Nilainya adalah ${nilai} maka indeksnya B`)
} else if (nilai >= 65) {
    console.log(`Nilainya adalah ${nilai} maka indeksnya C`) //Jawaban Soal 1
} else if (nilai >= 55) {
    console.log(`Nilainya adalah ${nilai} maka indeksnya D`)
} else {
    console.log(`Nilainya adalah ${nilai} maka indeksnya E`)
}

//Soal 2
console.log(pemisah)
console.log("Jawaban No 2")

var tanggal = 3;
var bulan = 12;
var tahun = 1999;

switch (bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`); //Jawaban Soal 2
        break;
    case 8:
        console.log(`${tanggal} Agusturs ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log(`Hanya ada 12 bulan dalam 1 tahun masehi`);
}

//Soal 3
console.log(pemisah)
console.log("Jawaban No 3")

var sisisatu = 3;
var n = '';

for (var i = 0; i < sisisatu; i++) {
    for (var j = 0; j <= i; j++) { //Jawaban Soal 3
        n += '#';
    }
    n += '\n';
}

var sisidua = 7;
var m = '';
for (var i = 0; i < sisidua; i++) {
    for (var j = 0; j <= i; j++) { //Jawaban Soal 3
        m += '#';
    }
    m += '\n';
}

console.log('Sisi 3 \n' + n)
console.log('Sisi 7 \n' + m)

//Soal 4
console.log(pemisah)
console.log("Jawaban No 4")

var m = 10;
var satu = 'Programming';
var dua = 'Javascript';
var tiga = 'VueJS';

for(var i = 1; i <= m; i++){
    if(i % 3 === 1) console.log(i + ` - I love ${satu}` );
    if(i % 3 === 2) console.log(i + ` - I love ${dua}` ); //Jawaban Soal 4
    if(i % 3 === 0) console.log(i + ` - I love ${tiga}` );
    if(i % 3 === 0) {
        for(var j = 3; j <= i; j += 3){
        console.log('===');
        }
    }
}