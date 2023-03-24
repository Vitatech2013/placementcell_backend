import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({

    CompanyName: {
         type: String
     },
    JobLocation: {
         type:String
     },
     JobRole: {
         type: String
     },
     Qualification: {
         type: String
        
     },
    JobCategory: {
         type:String
     },
     RequiredSkills: {
         type: String
     },
     ApplylastDate: {
         type: String
     }
 }, {
     timestamps: true
 });
 
 const JobsModel = mongoose.model('Jobs', jobSchema)
 
 export default JobsModel