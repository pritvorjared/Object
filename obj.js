const people = {
  firstName: "Artem",
  secondNAme: "Mazur",
  age: 29,
  birthYear: 1992,
  class: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  good: true,
  language: {
    ru: 2,
    ua: 2,
    en: 3,
    de: 5,
  },
  makeTest: function () {
    console.log("Hello!!!");
  },
};

// people.makeTest();
// console.log(people);
// console.log(typeof people);
// const { ru, ua, en, de } = people.language;
// console.log(ru, ua, en, de);
let num = Object.keys(people).length;
console.log(num);

for (let keys in people) {
  console.log(`Kluch ${keys} Imeet znachenie ${people[keys]} `);
}
