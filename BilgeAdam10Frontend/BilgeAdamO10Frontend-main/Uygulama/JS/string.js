// -- Birkaç cümleden oluşan bir hikaye yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.

// 1- Yazdığınız hikayenin uzunluğunu yazdırın.

// 2- Hikayenin toplam index sayısı kaçtır.

// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.

// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)

// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)

// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.

// 8- Son 5 karakter haric hikayenizi yazdırın.

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.

// 11- Hikayenizdeki "a" karakterini "e" ye çevirin.

// 12- Bütün metni büyük harfe çevirin.

// 13- Bütün metni küçük harfe çevirin.

// -----------------------------------------------

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.

//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.

//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"

// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun.

//   a- Başındaki boşlukları kaldırın.

//   b- Sonundaki boşlukları kaldırın.

//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.

// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.

// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"

const myStory =
  "Bir berber bir berbere:Bre berber, gel birader, biz beraber Berberistan’da bir berber dükkanı açalım” demiş.";
console.log(myStory.length); //uzunluk
console.log(myStory.length - 1); //toplam index
console.log(myStory.indexOf("berber")); //ilk index
console.log(myStory.lastIndexOf("berber")); //son index
console.log(myStory.slice(0, 15)); //ilk 15 karakter
console.log(myStory.substring(0, 15)); //ilk 15 karakter
console.log(myStory.slice(15)); //15. karakterden sonrası
console.log(myStory.substring(15)); //15. karakterden sonrası
console.log(myStory.slice(myStory.length - 5)); //son 5 karakter
console.log(myStory.substring(myStory.length - 5)); //son 5 karakter
console.log(myStory.slice(0, myStory.length - 5)); //son 5 haric
console.log(myStory.substring(0, myStory.length - 5)); //son 5 haric
console.log(myStory.includes("berber")); //içeriyor mu
console.log(myStory.replaceAll("i", "ı")); //i yerine ı tümü
console.log(myStory.replace("a", "e")); //ilk a
console.log(myStory.toUpperCase()); //büyük harf
console.log(myStory.toLowerCase()); //küçük harf
const isim = prompt("Adınızı giriniz");
console.log("Hoşgeldin, " + isim);
console.log(`Hoşgeldin, ${isim}`);
const isim2 = " " + isim + " ";
console.log(isim2);
console.log(isim2.trimStart());
console.log(isim2.trimEnd());
console.log(isim2.trim());
console.log(`BENİM Adım: ${userName.toUpperCase()}`);
const ara = "Ara vakti. İyi dinlenmeler";
alert(ara);

const kelime = "ey edip adanada pide ye";
//reverse
// const reverse = kelime.split("").reverse().join("");

for (let i = kelime.length - 1; i < kelime.length; i--) {
  console.log(kelime.charAt(i));
}
if (kelime === reverse) {
  console.log(kelime + "palindrom");
} else {
  console.log("palindrom değil");
}
