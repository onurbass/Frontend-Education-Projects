// Kullanılacak diziler

const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dizi1 = ["elma", "armut", "kiraz", "üzüm"];

const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
// ---------------forEach-------------------

// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

dizi.forEach((item) => console.log(item));

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((item) => {
  if (item % 2 === 0) {
    console.log(item);
  }
});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const yeniDizi = [];
dizi.forEach((item) => {
  yeniDizi.push(item * 2);
});
console.log(yeniDizi);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)

let toplam = 0;
dizi.forEach((item) => {
  toplam += item;
});
console.log(toplam);
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((item, index) => {
  if (index === dizi.length - 1) {
    console.log("Bu dizi son elemanıdır." + item);
  } else {
    console.log(item);
  }
});
// ---------------map-------------------

// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const buyukHarfDizi = dizi1.map((item) => item.toUpperCase());
console.log(buyukHarfDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const random = Math.floor(Math.random() * 10 + 1);
const randomToplam = dizi.map((item) => item + random);
console.log(randomToplam);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const reverseDizi = dizi1.map((item) => item.split("").reverse().join(""));
console.log(reverseDizi);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const stringeCevir = dizi.map((item) => item.toString());
console.log(typeof stringeCevir[1]);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const reverseKelime = dizi1.map((item) => {
  let yeniKelime = "";
  for (let i = item.length - 1; i >= 0; i--) {
    yeniKelime += item[i];
  }
  return yeniKelime;
});
console.log(reverseKelime);

// ---------------filter-------------------

// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const ciftSayilarFilter = dizi.filter((item) => item % 2 === 0);
console.log(ciftSayilarFilter);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const kelimeUzunluk = dizi1.filter((item) => item.length > 4);
console.log(kelimeUzunluk);

// ---------------reduce-------------------

// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.

const toplamSonuc = dizi.reduce((total, number, currentIndex) => {
  if (currentIndex === 1) {
    return total + number + 4;
  } else {
    return total + number + 2;
  }
});
console.log(toplamSonuc);

const toplam2 = dizi.reduce((total, number) => {
  return total + number + 2;
}, 0);

console.log(toplam2);
// ---------------find-------------------

// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const ilkCift = dizi.find((item) => item % 2 === 0);
console.log(ilkCift);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const sonCift = dizi.findLast((item) => item % 2 === 0);
console.log(sonCift);

// ---------------some-------------------

// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const negatifVarmi = dizi2.some((item) => item < 0);
console.log(negatifVarmi);

// ---------------every-------------------

// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const hepsiPozitifmi = dizi3.every((item) => item > 0);
console.log(hepsiPozitifmi);

// ---------------sort-------------------

// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

const sirala = dizi2.sort((a, b) => a - b);
console.log(sirala);
