const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// Using dotenv to import the MONGO_URI constant - to hide the database!! it's declared in .env file
const uri = process.env.MONGO_URI;
dotenv.config();

// //difficult option
// async function startServer() {
//   try{
//     mongoose.set('strictQuery', false);
//     const connection = await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     //How we check that MongoDB connection works.
//     console.log(`MongoDB is connected to: ${connection.connection.host}`);
//   } catch (error){
//       console.log('cannot connect')
//   }
// }

//declare func connectionDB for exporting puposes!
const connectionDB = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

module.exports = connectionDB;
