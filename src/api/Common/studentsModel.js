import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    studentname:{
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    emailid: {
        type: String
      
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    collegename:{
        type: String
    },
    education: {
        type: String
    },
    branch: {
        type: String
    },
    passyear: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    extraskills: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const StudentsModel = mongoose.model('students', studentSchema)


export default StudentsModel