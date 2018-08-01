const express = require("express");
const config = require("config");
const students = require('./students');
const teachers = require('./teachers');
const courses = require('./courses');

const app = express();

app.use(express.static('public'));
app.use('/api/students', students);
app.use('/api/teachers', teachers);
app.use('/api/courses', courses);

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});