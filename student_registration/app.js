let express = require("express");
let studentRouter = require("./router/studentRouter");
let app = express();

app.use(express.json());
app.use("/students", studentRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// Testing with Postman
// GET http://localhost:3000/students
// GET http://localhost:3000/students/:id
// POST http://localhost:3000/students (with JSON body)
// DELETE http://localhost:3000/students/:id
// PUT http://localhost:3000/students/:id (with JSON body)
// GET http://localhost:3000/students/filterByProgram?program=Compro