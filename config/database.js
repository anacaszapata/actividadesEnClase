const mongoose= require('mongoose');
let User

const connectDatabase = async () => {
    try{
        if(!User){
            User = mongoose.model('notas',require('../models/userModel').schema);
        }
        await mongoose.connect('mongodb+srv://anacaszapata:khvrES0VEKyM0QVF@estudiantesprofesores.ukdbcld.mongodb.net/')
        .then(()=>console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();

    }catch (error){
        console.error('Failed to connect to MongoDB:',error);
        process.exit(1);
    }
};
const initializeData = async () => {
    try{
        await User.insertMany();
        const usersData = [
            {
                name:"Sofia",
                email:"anacas@gmail.com",
                edad:21,
                profesorId:""
                
            },
            {
                name:"Victor",
                email:"viictormejia@gmail.com",
                edad:23,
                profesorId:""
            },
            {
                name:"Daniel",
                email:"daniel@gmail.com",
                edad:22,
                profesorId:"",
            },
            {
                name:"Alexander",
                email:"alexriwi@gmail.com",
                edad:22,
                profesorId:"",
            },
            {
                name:"Alejandro",
                email:"alejoandro@gmail.com",
                edad:19,
                profesorId:"",
            },
            {
                name:"Camila",
                email:"camilasepu@gmail.com",
                edad:21,
                profesorId:"",
            },

        ];
    } catch(error){
        console.error('Data initialization error:',error);
        process.exit(1);
    }
};
module.exports =connectDatabase;