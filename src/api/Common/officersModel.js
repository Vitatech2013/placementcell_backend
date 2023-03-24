import mongoose from 'mongoose'

const officerSchema = new mongoose.Schema({

      Name:{
          type: String,
          required: true
      },
      Gender: {
          type: String,
          required: true
      },
      EmailId: {
          type: String,
          required: true
      },
      Password: {
          type: String
      },
      Mobileno: {
          type: Number,
          required: true
      },
      City: {
          type: String,
          required: true
      },
      Address: {
          type: String,
          required: true
      },
  }, {
      timestamps: true
  });
  const Officersmodel = mongoose.model('Officers', officerSchema)
  export default Officersmodel