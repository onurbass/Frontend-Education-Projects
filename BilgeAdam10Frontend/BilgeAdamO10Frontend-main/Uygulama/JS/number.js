// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
// 7-) bir sayının karekökünü bulun.
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.

const number = Math.abs(-5);
console.log(number);
const number2 = Math.ceil(3.2);
console.log(number2);
const number3 = Math.floor(3.2);
console.log(number3);
const array = [6, 15, -7, 0, 80, -35];
console.log(Math.max(...array));
console.log(Math.min(...array));
const number4 = (123.456789).toFixed(3);
console.log(number4);
const number5 = Math.sqrt(9);
console.log(number5);
const number6 = Math.pow(2, 3);
console.log(number6);
const number7 = 123.9656789;
console.log(number7.toPrecision(6));
console.log(Math.trunc(number7));
