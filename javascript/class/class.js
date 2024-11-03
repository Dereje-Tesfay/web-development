
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;

    }

}
const person = new Person("Dereje", "Tesfaye");
const getFullName = person.getFullName();

console.log(getFullName);

console.log(person);

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    getFullName(firstName, lastName) {
        return `Student ${this.firstName} ${this.lastName}`;

    }
}
const student = new Student("Dereje", "Tesfaye");
const studentFullName = student.getFullName();
console.log(student);
console.log(studentFullName);



