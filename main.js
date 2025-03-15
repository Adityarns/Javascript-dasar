// TIPE DATA

// SPASI
document.writeln("</br>");
// STRING
document.writeln("anjay mabar");
document.writeln("</br>");
// MENAMBAH STRING
document.writeln("anjay mabar" + "kelas king");
document.writeln("</br>");
// NUMBER
document.writeln("100");
document.writeln("</br>");
document.writeln("12.46");
document.writeln("</br>");
// BOOLEAN
document.writeln(true);
document.writeln("</br>");
document.writeln(false);
document.writeln("</br>");

// MEMBUAT VARIABEL TERPISAH DENGAN VALUE
let fullName1;
fullName = "Aditya Rahman Syach";

// MEMBUAT VARIABEL LANGSUNG DENGAN VALUE
let fullName2 = "Aditya Rahman Syach";
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
let angka1 = 10 == "10";
document.writeln("<p>" + angka1 + "</p>");
// SAMA DENGAN DAN SATU TIPE
let angka2 = 10 === "10";
document.writeln("<p>" + angka2 + "</p>");

//OPERATOR LOGIKA
const mtk = 75;
const pemrograman = 80;
const lulus1 = mtk > 80;
const lulus2 = pemrograman > 80;
const lulus = lulus1 && lulus2;
document.writeln("<p>" + lulus + "</p>");

// CONSOLE
console.info("Ini informasi");
console.warn("Ini peringatan");
console.error("Ini error");

// KONVERSI DARI STRING KE NUMBER
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
