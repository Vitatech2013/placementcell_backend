import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    ssc: {
        type: String,
        required: true
    },
    inter: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    companyname:{
        type: String,
        required: true
    },
    jobcategory:{
        type: String,
        required: true
    },
    requiredskills: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ApplyJobsModel = mongoose.model('applyjobs', studentSchema);

export default ApplyJobsModel