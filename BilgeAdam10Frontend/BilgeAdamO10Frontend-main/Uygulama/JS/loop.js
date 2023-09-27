// -------------------For, Başlangıç Bitiş Arası Sayıların Toplamı-----------------------

// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)
let baslangic = prompt("Baslangic gir");
let bitis = prompt("Bitis gir");
let toplam = 0;
for (let i = baslangic; i <= bitis; i++) {
  toplam += i;
}
console.log(toplam);

// -------------------For, Geçen Öğrenci Sayısı-----------------------

// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.
// var toplam = 0;
// var ort = 0;
// var sayac = 0;
// for (let i = 0; i < 5; i++) {
//   var not = prompt("Not gir");
//   toplam += Number(not);

//   if (not >= 60) {
//     sayac++;
//   }
// }
// console.log(toplam / 5);
// console.log(sayac + " tane gecti");

// -------------------While, Sayı Tahmin uygulaması-----------------------

// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// var random = Math.floor(Math.random() * 10 + 1);
// sayac = 0;
// while (sayac < 3) {
//   let tahmin = prompt("Tahmin gir");
//   if (tahmin == random) {
//     console.log("Tebrikler");
//     break;
//   } else if (tahmin < random) {
//     console.log("Sayiyi arttir");
//   } else {
//     console.log("Sayiyi azalt");
//   }
//   sayac++;
// }

// -------------------While, Alışveriş Sepeti Uygulaması-----------------------

// Kurallar:

// While döngüsü kullanılacak.

// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.

// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.

// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
// var secenek = "";
// var fToplam = 0;
// while (secenek != "onayla") {
//   secenek = prompt("Urun gir");
//   if (secenek != "onayla") {
//     let fiyat = prompt("Fiyat gir");
//     fToplam += Number(fiyat);
//   }
// }
// alert("urunler toplam fiyat " + fToplam);

var random = Math.floor(Math.random() * 10) + 1;
console.log(random);

var hak = 3;

while (hak > 0) {
  console.log(`kalan hakkınız : ${hak}`);
  var tahmin = parseInt(prompt("1 ile 10 arasında bir sayı giriniz"));

  if (isNaN(tahmin) || tahmin < 1 || tahmin > 10) {
    console.log("Lütfen geçerli bir sayı giriniz..");
  } else {
    if (tahmin !== random) {
      console.log("yanlış tahmin ettiniz..");
      hak--;

      if (hak == 0) {
        console.log("Oyunu kaybettiniz.");
        hak = 3;
        random = Math.floor(Math.random() * 10) + 1;
      }
    } else {
      console.log("Tahmininiz doğru..");
      break;
    }
  }
}
