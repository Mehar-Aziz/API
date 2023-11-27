const express = require("express");
const app = express();
app.use(express.json());
const students = ["John", "Davis", "Alis"];

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/search", function (req, res) {
  res.send("API Search");
});

app.get("/api/students", function (req, res) {
  res.send(students);
});

app.get("/api/students/:index", function (req, res) {
  if (!students[req.params.index])
    return res.status(400).send("Product not found");
  res.send(students[req.params.index]);
});

app.put("/api/students/:index", function (req, res) {
 
  students[req.params.index] = req.body.name;
  res.send(students[req.params.index]);
});

app.delete("/api/students/:index", function (req, res) {
  students.splice(req.params.index, 1);
  res.send(students);
});

app.post("/api/students", function (req, res) {
  students.push(req.body.name);
  res.send(students);
});

app.listen(3000);