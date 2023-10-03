// Egzersiz: Seviye 1

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
// 1.	E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.

const [E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp] = constants;
console.log(`E : ${E}`);
console.log(`pi : ${pi}`);
console.log(`yerçekimi : ${yerçekimi}`);
console.log(`humanBodyTemp : ${humanBodyTemp}`);
console.log(`waterBoilingTemp : ${waterBoilingTemp}`);

// 2.	fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.

const [fin, est, sw, den, nor] = countries;
console.log(`fin : ${fin}`);
console.log(`est : ${est}`);
console.log(`sw : ${sw}`);
console.log(`den : ${den}`);
console.log(`nor : ${nor}`);

// 3.	Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.

const { width, height, area, perimeter } = rectangle;
console.log(`width : ${width}`);
console.log(`height : ${height}`);
console.log(`area : ${area}`);
console.log(`perimeter : ${perimeter}`);

// Egzersiz: Seviye 2
// 4.	Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.

for (const user of users) {
  const { name, scores, skills, age } = user;
  console.log(
    `name: ${name} - scores: ${scores} - skills: ${skills} - age: ${age} `
  );
}

// 5.	İkiden az beceriye sahip kişileri bulun.

const ikidenAzSkill = users.filter((u) => u.skills.length < 2);
console.log(ikidenAzSkill);

// Egzersiz: Seviye 3
// 6.	Tüm ülkelerin adını, sermayesini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın

const countries2 = [
  {
    name: "Türkiye",
    capital: "Ankara",
    population: 85000000,
    language: ["Türkçe"],
  },
  {
    name: "ABD",
    capital: "Washington, D.C.",
    population: 331000000,
    language: ["İngilizce"],
  },
  {
    name: "Fransa",
    capital: "Paris",
    population: 67000000,
    language: ["Fransızca"],
  },
];

for (const { name, capital, population, language } of countries2) {
  console.log(`Ülke Adı: ${name}`);
  console.log(`Başkent: ${capital}`);
  console.log(`Nüfus: ${population}`);
  console.log(`Konuşulan Diller: ${language.join(", ")}`);
  console.log("-----------------------------------");
}
// 7.	Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır. Aşağıdaki dizi adını da, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.

const student1 = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name1, skills, [, , jsScore, reactScore]] = student1;

console.log(name1, skills, jsScore, reactScore);

// David(4)[("HTM", "CSS", "JS", "React")], 90, 95

// 8.	Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  return array.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
  }));
}

console.log(convertArrayToObject(students));
// [
//   ({
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   })
// ];
// 9.	Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e kopyalayın.Yeni nesnede aşağıdakini ekleyin?
// •	frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
// •	backEnd beceri setlerine 9. seviye Express'i ekleyin
// •	dataBase beceri setlerine seviye 8 ile SQL ekleyin
// •	dataScience beceri setlerine seviye olmadan SQL ekleyin
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// •	frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
// •	backEnd beceri setlerine 9. seviye Express'i ekleyin
// •	dataBase beceri setlerine seviye 8 ile SQL ekleyin
// •	dataScience beceri setlerine seviye olmadan SQL ekleyin
const newStudent = { ...student2 };
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: "8" });
newStudent.skills.backEnd.push({ skill: "Express", level: "9" });
newStudent.skills.dataBase.push({ skill: "SQL", level: "8" });
newStudent.skills.dataScience.push("SQL");

console.log(newStudent);

// Kopyalanan nesne çıktısı şöyle görünmelidir:
//    {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }
