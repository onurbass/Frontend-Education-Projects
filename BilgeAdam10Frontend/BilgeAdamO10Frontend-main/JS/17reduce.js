const sinif = ["Ali", "Aysu", "Aminenur", "Gizem", "Orhun", "Osman", "Salih"];

const sonuc = sinif.reduce((tumArray, anlikDeger) => {
  return `${tumArray}, ${anlikDeger}`;
});

console.log(sonuc);
