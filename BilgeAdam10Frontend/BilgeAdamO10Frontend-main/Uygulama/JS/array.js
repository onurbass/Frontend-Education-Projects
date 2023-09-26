let myArray = [
  "onur",
  "baş",
  26,
  true,
  "elma",
  "armut",
  "dolma",
  "mantı",
  "salçalı ekmek",
  "makarna",
];

myArray[myArray.indexOf("onur")] = "Osman";
console.log(myArray);
console.log(myArray.length);
let yeniUzunluk = myArray.push("kedi");
console.log(yeniUzunluk);
let yeniUzunluk1 = myArray.unshift("köpek");
console.log(yeniUzunluk);
let silinenSon = myArray.pop();
console.log(silinenSon);
let silinenIlk = myArray.shift();
console.log(silinenIlk);
let newArray = [silinenIlk, silinenSon, yeniUzunluk, yeniUzunluk1];
console.log(newArray);
let yeniDegisken = myArray.concat(newArray);
console.log(yeniDegisken);
let yeniDegisken1 = [...myArray, ...newArray];
console.log(yeniDegisken1);
console.log(myArray.includes("veli"));
console.log(myArray.slice(4).includes("makarna"));
console.log(myArray.indexOf("elma"));
let degisken = newArray.slice(0, 3);
console.log(degisken);
degisken.splice(1, 1, "karpuz", "kavun");
console.log(degisken);
