const mongoose = require('mongoose');

const estudiantesSchema = new mongoose.Schema({
    name: String,
    email: String,
    edad: Number,
    profesorId: String,
});

const User = mongoose.model('estudiantes',estudiantesSchema);
module.exports= User;

const profesoresSchema = new mongoose.Schema({
    name: String,
    especialidad: String,
    edad: Number,
});

const Profesor = mongoose.model('profesores',profesoresSchema);
module.exports= Profesor;
