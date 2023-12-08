//Question(1)

// Object literal
const student = {
  firstName: "John",
  lastName: "Doe",
  grades: [],
  insertGrade: function(newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }
};

// Example usage:
student.insertGrade(85);
student.insertGrade(90);
student.insertGrade(78);

console.log(student.computeAverageGrade()); // Output: 84.33

//Question(2)

// Function expression
const createStudent = function(firstName, lastName) {
  return {
    firstName,
    lastName,
    grades: [],
    insertGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  };
};

// Example usage:
const newStudent = createStudent("Jane", "Doe");
newStudent.insertGrade(92);
newStudent.insertGrade(88);
newStudent.insertGrade(95);

console.log(newStudent.computeAverageGrade()); // Output: 91.67


//Question(3)

// Adding a new method to the built-in Array constructor
Array.prototype.mySort = function() {
  return this.sort((a, b) => a - b);
};

// Example usage:
const numbers = [5, 2, 8, 1, 7];
numbers.mySort();

console.log(numbers); // Output: [1, 2, 5, 7, 8]


//Question(4)

// Animal constructor
function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

// Method to increase speed
Animal.prototype.run = function(speed) {
  this.speed += speed;
};

// Static method to compare speeds of two animals
Animal.compareBySpeed = function(a1, a2) {
  return a1.speed - a2.speed;
};

// Rabbit constructor inheriting from Animal
function Rabbit(name, speed) {
  // Call the parent constructor
  Animal.call(this, name, speed);
}

// Inherit from Animal
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// New method for Rabbit
Rabbit.prototype.hide = function() {
  console.log(`${this.name} hides`);
};

// Example usage
const rabbit = new Rabbit("Fluffy", 10);
console.log(rabbit.speed); // Output: 10

rabbit.run(5);
console.log(rabbit.speed); // Output: 15

rabbit.hide(); // Output: Fluffy hides

