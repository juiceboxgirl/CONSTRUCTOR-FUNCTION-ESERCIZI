console.log("-------ESERCIZIO 1-------");

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(secondUser) {
    if (this.age > secondUser.age) {
      return `${this.firstName} is older than ${secondUser.firstName}`;
    } else if (this.age < secondUser.age) {
      return `${this.firstName} is younger than ${secondUser.firstName}`;
    } else {
      return `${this.firstName} is as old as ${secondUser.firstName}`;
    }
  }
}

const alessia = new User("Alessia", "Cesaroni", 31, "Ascoli Piceno");
const beatrice = new User("Beatrice", "Santone", 30, "Offida");

const ageComparison = alessia.compareAge(beatrice);

console.log(ageComparison);

console.log("-------ESERCIZIO 2-------");
