// TIPE DATA

// SPASI
document.writeln("</br>");
// STRING
document.writeln("-----STRING-----\n");
document.writeln("</br>");
document.writeln("anjay mabar");
document.writeln("</br>");
// MENAMBAH STRING
document.writeln("-----MENAMBAHKAN STRING-----\n");
document.writeln("</br>");
document.writeln("anjay mabar" + "kelas king");
document.writeln("</br>");
// NUMBER
document.writeln("-----NUMBER-----\n");
document.writeln("</br>");
document.writeln("100");
document.writeln("</br>");
document.writeln("12.46");
document.writeln("</br>");
// BOOLEAN
document.writeln("-----BOOLEAN-----\n");
document.writeln("</br>");
document.writeln(true);
document.writeln("</br>");
document.writeln(false);
document.writeln("</br>");

// MEMBUAT VARIABEL TERPISAH DENGAN VALUE
let fullName1;
fullName = "Aditya Rahman Syach";

// MEMBUAT VARIABEL LANGSUNG DENGAN VALUE
let fullName2 = "Aditya Rahman Syach";
document.writeln("-----VARIABEL-----\n");
document.writeln("</br>");
document.writeln(fullName);
document.writeln("</br>");

// MEMBUAT VARIABEL SECARA KONSTAN
const fullName3 = "Ambatron";
document.writeln(fullName3);
document.writeln("</br>");

// JIKA ADA VARIABEL DALAM STRING
const nama = "Yasa";
document.writeln(`Nama saya: ${nama}`);

// OPERATOR MATEMATIKA
document.writeln("</br>");
document.writeln("\n-----OPERATOR MTK-----");
let jumlah = 1 + 2;
document.writeln("<p>1 + 2 = " + jumlah + "</p>");
jumlah += 3;
document.writeln("<p>3 + 3 = " + jumlah + "</p>");
jumlah *= 10;
document.writeln("<p>6 * 10 = " + jumlah + "</p>");
jumlah++;
document.writeln("<p>60 + 1 = " + jumlah + "</p>");

// OPERATOR PERBANDINGAN
// SAMA DENGAN
document.writeln("-----OPERATOR PERBANDINGAN-----");
let angka1 = 10 == "10";
document.writeln("<p>" + angka1 + "</p>");
// SAMA DENGAN DAN SATU TIPE
let angka2 = 10 === "10";
document.writeln("<p>" + angka2 + "</p>");

//OPERATOR LOGIKA
document.writeln("-----OPERATOR LOGIKA-----");
const mtk = 75;
const pemrograman = 80;
const lulus1 = mtk > 80;
const lulus2 = pemrograman > 80;
const lulus = lulus1 && lulus2;
document.writeln("<p>" + lulus + "</p>");

// CONSOLE
console.info("-----CONSOLE-----");
console.info("Ini informasi");
console.warn("Ini peringatan");
console.error("Ini error");

// KONVERSI DARI STRING KE NUMBER
document.writeln("-----KONVERSI STRING KE NUMBER-----");
let value1 = "1";
let value2 = 2;
let value3 = 3.232;
let sum = value1 + value2;
document.writeln(`<p>hasil: ${sum}</p>`);
document.writeln(`<p>Bilanan bulat: ${parseInt(value3)}</p>`);
document.writeln(`<p>Bilanan pecahan: ${parseFloat(value3)}</p>`);
document.writeln(`<p>Bilanan bulat atau pecahan: ${Number(value3)}</p>`);
document.writeln(`<p>hasil: ${sum}</p>`);
const xy = 1;
const zx = 5;
const sum2 = xy.toString() + zx.toString();
document.writeln(`<p>Number ke String: ${sum2}</p>`);

// ARRAY
document.writeln("-----ARRAY-----");
document.writeln("</br>");
let arrayKosong = [];
let arrayIsi = ["Upin"];

arrayIsi.push("Ipin");
arrayIsi.push("Mail", "Jarjit"); // menambahkan data ke array
const panjangArray = arrayIsi.length; // Mendapatkan panjang array
const index1 = arrayIsi[1];
document.writeln(arrayIsi);
delete arrayIsi[2]; // Menghapus array
const index2 = (arrayIsi[4] = "Meimei");
document.writeln(panjangArray);
document.writeln(index1);
console.info("-----ARRAY-----");
console.table(arrayIsi); // menampilkan tabel array pada console

// OBJECT
const object1 = {}; //Mirip kayak array
object1["nama"] = "Aditya Rahman Syach"; // menambahkan data ke object
object1["umur"] = "19 Tahun";
object1["jurusan"] = "Teknik Informatika";
object1["pacar"] = "ada";
console.info("-----OBJECT-----");
console.table(object1);

delete object1["pacar"]; // menghapus data pada object
console.table(object1);

// Membuat object dengan properties
const object2 = {
  nama: "Saipul",
  umur: "20 Tahun",
  jurusan: "Fisika",
  pacar: "Banyak",
};
// Cara memanggil object berdasarkan propertinya
console.info(`Nama: ${object2.nama}`);
console.info(`Umur: ${object2.umur}`);
console.info(`Urusan: ${object2.jurusan}`);
console.info(`Pacar: ${object2.pacar}`);

// Kondisi If di Java Script
document.writeln("</br>");
document.writeln("-----PENGGUNAAN IF DI JS-----");
const nilaiMtk = 70;
const nilaiPDP = 70;
if (nilaiMtk > 65 && nilaiPDP > 70) {
  document.writeln("<p>" + "Selamat anda lulus" + "</p>");
} else {
  document.writeln("<p>" + "Ga lulus" + "</p>");
}

// Switch Case
let UTS = "A";
switch (UTS){
  case "A":
    document.writeln("<p>Sangat Bagus...</p>")
    break;
  case "B":
    document.writeln("<p>Sangat Bagus...</p>")
    break;
  case "c":
    document.writeln("<p>Sangat Bagus...</p>")
    break;
}



// Popup di Js
// let inputanUser = prompt("Masukkan Usia Anda!!!");
// alert(`Anda Berumur ${inputanUser} tahun`)

// Variabel Undefined 
// let bapaknyaArdhi = prompt("Masukkan nama bapaknya Ardhi");

// if (bapaknyaArdhi === undefined){
//   alert("Undefined");
// }
// else{
//   alert("Defined");
// }

