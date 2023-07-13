//require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');
//require('../config/dbConnect')();

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reacthealthtracker');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const doctorSeed = [
  {
    firstname: 'Gaurav',
    lastname: 'Stomach',
    clinic: 'Clinic A',
    phone: '+91-997xx xxx35',
  },
  {
    firstname: 'Saurav',
    lastname: 'Lungs',
    clinic: 'Clinic B',
    phone: '+91-997xx xxx35',
  },
  {
    firstname: 'Manoj',
    lastname: 'King',
    clinic: 'Clinic C',
    phone: '+91-997xx xxx35',
  },
];

db.Doctor
  .deleteMany({})
  .then(() => db.Doctor.collection.insertMany(doctorSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' doctors inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

