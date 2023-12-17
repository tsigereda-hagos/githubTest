let db = [
  { id: 116857, name: "Anna Johns", program: "Compro" },
  { id: 615757, name: "Smith Dove", program: "Compro" },
  { id: 618975, name: "Jom Jerry", program: "MBA" }
];


class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }

  static getStudents() {
    return db;
  }

  static getStudentById(id) {
    return db.find(s => s.id == id);
  }

  static deleteStudentById(id) {
    const index = db.findIndex(s => s.id == id);
    if (index !== -1) return db.splice(index, 1)[0];
  }

  addStudent() {
    if (!db.find(s => s.id == this.id)) {
      db.push(this);
      return this;
    }
  }

  static updateStudentById(id, updatedData) {
    const student = db.find(s => s.id == id);
    if (student) {
      Object.assign(student, updatedData);
      return student;
    }
    return null;
  }

  static filterByProgram(program) {
    return db.filter(s => s.program.toLowerCase() === program.toLowerCase());
  }
}



module.exports = Student;
