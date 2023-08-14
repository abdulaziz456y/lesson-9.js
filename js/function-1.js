let students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

let newStudents = students.map((el) => {
  if (el.percent >= 85) {
    el.isPuberty = "5 baho"
  } else {
    el.isPuberty = "4 baho"
  } 
  return el;
})

console.log(newStudents);