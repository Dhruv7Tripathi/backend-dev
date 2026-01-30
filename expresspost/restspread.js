const emp = {
  id: 1,
  name: "emp1",
  age: 23,
  city: "hyd",
  deparment: "IT"
}

const emp2 = { ...emp };

const { id, name, ...rest } = emp;

console.log(emp2);
console.log(id);
console.log(name);
console.log(rest);

let updatedEmp = {
  ...emp,
  age: 24,
  city: "bangalore"
}

console.log(updatedEmp);