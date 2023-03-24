import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({

   CompanyName: {
        type: String,
       required: true
    },
   CompanyType: {
        type:String,
        required: true
    },
    Phoneno: {
        type: Number,
       required: true
    },
   Emailid: {
        type:String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
       required: true
    },
    State: {
        type: String,
       required: true
    },
   Branch: {
        type:String,
        required: true
    },
    CompanyWebsite: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const CompanysModel = mongoose.model('Companies', companySchema)


export default CompanysModel