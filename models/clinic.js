const mongoose = require('mongoose');

const Schema = mongoose.Schema;





const ClinicSchema = new Schema({
  clinicname: {
    type: String,
    trim: true,
    required: 'Clinic name is required',
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
 
  city: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
 
  state: {
    type: String,
    trim: true,
    required: 'State is Required',
  },
  
  zip: {
    type: Number,
    trim: true,
    required: 'Zip is Required',
  },
  
  phone: {
    type: Number,
    trim: true,
    match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
    required: 'Phone is Required',
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method

const Clinic = mongoose.model('Clinic', ClinicSchema);

// Export the Clinic model
module.exports = Clinic;