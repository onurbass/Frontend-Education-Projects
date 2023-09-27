// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim = (sayi1, sayi2) => sayi1 * sayi2;

console.log(carpim(5, 3));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
const kelimeSayisi = (cumle) => cumle.split(" ").length;
console.log(kelimeSayisi("merhaba ben onur"));

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
function facHesapla(sayi) {
  var multiply = 1;
  for (let i = 1; i <= sayi; i++) {
    multiply *= i;
  }
  return multiply;
}
console.log(facHesapla(5));
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalMi = function (sayi) {
  var deger = true;
  for (let index = 2; index <= sayi / 2; index++) {
    if (sayi % index == 0) {
      deger = false;
      break;
    }
  }
  return deger;
};

console.log(asalMi(13));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

function enBuyuk(dizi = []) {
  var max = Math.max(...dizi);
  return max;
}

const dizi = [3, 5, 9, 6, 7, 8, 1];

console.log(enBuyuk(dizi));

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
function diziToplam(dizi) {
  var toplam = 0;
  for (let index = 0; index < dizi.length; index++) {
    toplam += Number(dizi[index]);
  }

  return toplam;
}
var dizi2 = [1, 2, 3, 4, 5, 6];
console.log(diziToplam(dizi2));

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
const maxDeger = (dizi) => Math.max(...dizi);
console.log(maxDeger(dizi2));

const diziToplamiArrow = (dizi) =>
  dizi.reduce((toplam, sayi) => toplam + sayi, 0);
console.log(diziToplamiArrow(dizi2));
// Buradan itibaren yalnızca arrow function kullanıyoruz.

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
const terseCevir = (kelime) => kelime.split("").reverse().join("");
console.log(terseCevir("onur"));
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)
dizi = [1, 2, 3, 4, 5];
const karistir = (dizi) => {
  for (let index = 0; index < dizi.length; index++) {
    const j = Math.random() * index;
  }
  return dizi;
};
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// BONUS - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
