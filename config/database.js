const mongoose= require('mongoose');
let User

const connectDatabase = async () => {
    try{
         // Se comprueba si el modelo de usuario (User) ya está definido. Si no está definido, se define utilizando el método mongoose.model(). Se pasa el nombre del modelo como primer argumento y el esquema del modelo como segundo argumento
        if(!User){
            User = mongoose.model('notas',require('../models/userModel').schema);
        }
        await mongoose.connect('mongodb+srv://anacaszapata:z8dx8O6uKDIbJzLi@cluster0.a5nijxb.mongodb.net/')
        .then(()=>console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();

    }catch (error){
        console.error('Failed to connect to MongoDB:',error);
        process.exit(1);
    }
};
// Se define una función asíncrona llamada initializeData, que se encarga de borrar todos los documentos de la colección User y de insertar algunos datos de ejemplo en la base de datos


const initializeData = async () => {
    try{
        await User.deleteMany();

        const usersData = [
            {
                name:"Sofia",
                email:"anacas@gmail.com",
                password:"Medellin",
                
            },
            {
                name:"Victor",
                email:"viictormejia@gmail.com",
                password:"Bogota",
            },
        ];
        await User.insertMany(usersData);
        console.log('Data successfully initialized');
        } catch(error){
            console.error('Data initialization error:',error);
            process.exit(1);
        }
};

module.exports = connectDatabase;
// const db=mongoose.connection;

// db.on('error',console.error.bind(console,'connection error'));

// db.once('open', function(){
//     console.log('Connected to MongoDB');
//     // model
//     userSchema = mongoose.Schema({
//         nombre:String,
//         apellido:String,
//         edad:Number,
//         clan:String,
//         cohorte:Number

//     });

// const User = mongoose.model('estudiantes' ,userSchema);

// const app = express();
// app.use(express.json());

// //  1)mayores de 18 años
// app.get("/api/estudiantes/adult", async(req,res) => {
//     const users=await User.find({edad:{$gt:18}});
//     res.json(users);
// });


// // 2) Usuarios que sean de Van Rossum o de Meta
//  app.get("/api/estudiantes/clan", async(req,res) => {
//      const users = await User.find({clan:{$in:["Van Rossum", "Meta"]} });
//      res.json(users);
//  });


// // 4)Obtener a todos los usuarios que sean de Van Rossum y tengan mas de 21 años
// app.get("/api/estudiantes/clanEdad", async (req, res) => {
//     const users = await User.find({$and: [{ clan: "Van Rossum" },{ edad: { $gt: 21 } }] });
//     res.json(users);
// });


// // 5)Obtener a todos los usuarios que no sean de Van Rossum.
// app.get("/api/estudiantes/notVanRossum", async (req, res) => {
//     const users = await User.find({clan: { $ne: "Van Rossum" } });
//     res.json(users);
// });



// app.listen(3000,function(){
//     console.log('Servidor escuchando en el puerto 3000');
// });
// })
