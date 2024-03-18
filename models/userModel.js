const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nota:String
});

const User = mongoose.model('notas',userSchema);

module.exports= User;
