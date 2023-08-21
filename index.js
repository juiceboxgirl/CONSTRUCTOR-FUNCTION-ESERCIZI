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

// Esercizio 2 //

console.log("-------ESERCIZIO 2-------");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  compareOwner(secondPet) {
    if (this.ownerName === secondPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const aki = new Pet("Aki", "Alessia", "cat", "European");
const vinny = new Pet("Vinny", "Alessia", "cat", "mixed");
const flash = new Pet("Flash", "Giulia", "cat", "mixed");

console.log(aki);

const petComparison = aki.compareOwner(vinny);
console.log(petComparison);

// Esercizio 3 //

console.log("-------ESERCIZIO 3-------");

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  addPetToList(newPet);
  petForm.reset();
});

function addPetToList(pet) {
  const listItem = document.createElement("li");
  listItem.textContent = `${pet.petName} - ${pet.species} (${pet.breed}) - Proprietario: ${pet.ownerName}`;
  petList.appendChild(listItem);
}
