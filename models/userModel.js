const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    clan:String,
    cohorte:Number
});

const User = mongoose.model('estudiantes',userSchema);

module.exports= User;
