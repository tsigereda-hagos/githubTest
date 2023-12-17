let Student = require("../model/student");

let controller = {
  getStudents: function (req, res) {
    let allStudents = Student.getStudents();
    res.status(200).json(allStudents);
  },

  getStudentById: function (req, res) {
    let id = req.params.id;
    let student = Student.getStudentById(id);
    if (student) res.status(200).json(student);
    else res.status(404).json({ message: "Student not found" });
  },

  deleteStudentById: function (req, res) {
    let id = req.params.id;
    let deletedStudent = Student.deleteStudentById(id);
    if (deletedStudent) res.status(200).json(deletedStudent);
    else res.status(404).json({ message: "Student not found" });
  },

  createStudent: function (req, res) {
    let { id, name, program } = req.body;
    let student = new Student(id, name, program);
    let newCreatedStudent = student.addStudent();
    if (newCreatedStudent) res.status(201).json(newCreatedStudent);
    else res.status(400).json({ message: "Student already registered" });
  },

  updateStudentById: function (req, res) {
    let id = req.params.id;
    let updatedData = req.body;
    let updatedStudent = Student.updateStudentById(id, updatedData);
    if (updatedStudent) res.status(200).json(updatedStudent);
    else res.status(404).json({ message: "Student not found" });
  },

  filterByProgram: function (req, res) {
    let program = req.query.program;
    let filteredStudents = Student.filterByProgram(program);
    res.status(200).json(filteredStudents);
  }
};

module.exports = controller;
