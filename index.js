const express= require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://anacaszapata:z8dx8O6uKDIbJzLi@cluster0.a5nijxb.mongodb.net/')
const db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open', function(){
    console.log('Connected to MongoDB');
    // model
    userSchema = mongoose.Schema({
        nombre:String,
        apellido:String,
        edad:Number,
        clan:String,
        cohorte:Number
        
    });
   
const User = mongoose.model('estudiantes' ,userSchema);

const app = express();
app.use(express.json());

//  1)mayores de 18 años
app.get("/api/estudiantes/adult", async(req,res) => {
    const users=await User.find({edad:{$gt:18}});
    res.json(users);
});


// 2) Usuarios que sean de Van Rossum o de Meta
 app.get("/api/estudiantes/clan", async(req,res) => {
     const users = await User.find({clan:{$in:["Van Rossum", "Meta"]} });
     res.json(users);
 });


// 4)Obtener a todos los usuarios que sean de Van Rossum y tengan mas de 21 años
app.get("/api/estudiantes/clanEdad", async (req, res) => {
    const users = await User.find({$and: [{ clan: "Van Rossum" },{ edad: { $gt: 21 } }] });
    res.json(users);
});


// 5)Obtener a todos los usuarios que no sean de Van Rossum.
app.get("/api/estudiantes/notVanRossum", async (req, res) => {
    const users = await User.find({clan: { $ne: "Van Rossum" } });
    res.json(users);
});



app.listen(3000,function(){
    console.log('Servidor escuchando en el puerto 3000');
});
})
