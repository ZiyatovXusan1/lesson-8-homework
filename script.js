// ! 1-masala
// const people = [
//   { name: "Sattor", age: 33 },
//   { name: "G'affor", age: 22 },
//   { name: "Jabbor", age: 37 },
//   { name: "Qaxxor", age: 20 },
// ];

// function getAverageAge(arr) {
//   const totalAge = arr.reduce((result, person) => result + person.age, 0);
//   const averageAge = totalAge / arr.length;
//   return averageAge;
// }

// console.log(getAverageAge(people));

// ! 2-masla
// const people = [
//   { name: "Abdulaziz", age: 33},
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34},
//   { name: "Sardor", age: 20}
// ];

// const myMap = people.map(person => {
//     return {
//         ...person,
//         isMerried: person.age > 25 
//     };
// })
// console.log(myMap);
function getPositiveSum(arr) {
    let sum = 0;
  return arr.reduce((sum, num) => {
    if (num > 0) {
      return sum + num;
    }
    return sum;
  }); 
}
const numbers = [1, -4, 12, 0, -3, 29, -150];
const result = getPositiveSum(numbers);

console.log(result);