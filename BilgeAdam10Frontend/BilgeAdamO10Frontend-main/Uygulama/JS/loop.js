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
