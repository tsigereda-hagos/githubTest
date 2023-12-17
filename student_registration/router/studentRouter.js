let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");

router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.delete('/:id', studentController.deleteStudentById);
router.put('/:id', studentController.updateStudentById);
router.get('/filterByProgram', studentController.filterByProgram);

module.exports = router;
