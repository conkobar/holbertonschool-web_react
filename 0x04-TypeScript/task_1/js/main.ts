interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = { firstName: 'Bob', lastName: 'Barker', age: 2035, location: 'Oklahoma' };
const student2 = { firstName: 'George', lastName: 'Bush', age: 123, location: 'Texas' };
const studentsList : Array<Student> = [student1, student2];

function CreateTable(table: HTMLTableElement, studentsList: Array<Student>) {
  for (const student of studentsList) {
    let row = table.insertRow();
    const firstName = row.insertCell();
    const location = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
  }
  document.body.appendChild(table);
}
let table = document.createElement('table');
CreateTable(table, studentsList);


