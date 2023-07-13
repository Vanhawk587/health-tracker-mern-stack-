const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    // required: 'First name is required',
  },
  lastname: {
    type: String,
    trim: true,
    // required: 'Last name is required',
  },

  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required',
  },

  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function (input) {
        return input.length >= 6;
      },
      'Password should be longer.',
    ],
  },
 
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },

  doctors: [
    {
 
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Doctor',
    },
  ],
  // `clinics` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated clinics
  clinics: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Clinic',
    },
  ],

  healthLogs: [
    {

      type: Schema.Types.ObjectId,
    
      ref: 'HealthLog',
    },
  ],

  prescriptions: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Prescription',
    },
  ],
    // `attachment` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated attachment
  attachments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Attachement',
    },
  ],
    // `symptoms` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated symptoms
  symptoms: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Symptoms',
    },
  ],
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;