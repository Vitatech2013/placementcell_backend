import studentsModel from '../Common/studentsModel';
import officersModel from '../Common/officersModel';
import AdminLogin from './adminLoginModel';
import companysModel from '../Common/companysModel';
import jobsModel from '../Common/jobsModel';
import applyJobsModel from '../Common/applyJobsModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
    AdminLogin.find({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}

export const forgotPassword = (req, res) => {
    AdminLogin.find({"emailid":req.query.emailid}, (err, result) => {
      if (err) {      
        res.send(err);
      }
       else {
        result.map(results => {
            const subject = 'Credentials Recived';
            const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
            sendEmail(req.query.emailid, subject, body);
        }) 
        res.send(result);
      }
    })
  }
  
  export const chnagepassword = (req, res) => {
    AdminLogin.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }

export const viewStudentDetails = (req, res) => {
    studentsModel.find((err, student) => {
        if (err) {
            res.send(err);
        } else {
            res.send(student);
        }
    })
}


export const updateStudentDetails = (req, res) => {
    studentsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            studentsModel.find((err, students) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(students);
                }
            })
        }

    })
}


export const destroyStudents = (req, res) => {
    studentsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            studentsModel.find({}, (err, students) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(students);
                }
            })
        }
    })
}



export const viewOfficersDetails = (req, res) => {
    officersModel.find((err, officer) => {
        if (err) {
            res.send(err);
        } else {
            res.send(officer);
        }
    })
}


export const updateOfficerDetails = (req, res) => {
    officersModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            officersModels.find((err, officer) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(officer);
                }
            })
        }

    })
}


export const destroyOfficers = (req, res) => {
    officersModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            officersModels.find({},(err, officer) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(officer);
                }
            })
        }

    })
}



export const viewCompanys = (req, res) => {

    companysModel.find((err, company) => {
        if (err) {
            res.send(err);
        } else {
            res.send(company);
        }
    })
}


export const viewJobs = (req, res) => {
    jobsModel.find((err, job) => {
        if (err) {
            res.send(err);
        } else {
            res.send(job);
        }
    })
}


export const viewApplyJobs = (req, res) => {
    applyJobsModel.find((err, students) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(students);
        }
    })
}


export const downloadFiles = (req, res) => {
    studentsModel.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

