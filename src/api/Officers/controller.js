import studentsModel from '../Common/studentsModel';
import officersModel from '../Common/officersModel';
import companysModel from '../Common/companysModel';
import jobsModel from '../Common/jobsModel';
import applyJobsModel from '../Common/applyJobsModel';
import {sendEmail} from '../Common/email';


export const officerReg = (req, res) => {
    officersModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            const subject = 'Registration Details';
            const body = `Your are Successfully Registered in Placement Cell... <br>Please Login Using below Credentials<br>Emailid: ${req.body.EmailId}<br>Password: ${req.body.Password}<br>Thank You.`;      
            sendEmail(req.body.EmailId, subject, body);
            res.send(result);
        }
    })
}

export const officerlogin = (req, res) => {
    officersModel.find({ "EmailId": req.query.EmailId, "Password": req.query.Password }, (err, result) => {
        res.send(result);
    })
}

export const forgotPassword = (req, res) => {
    officersModel.find({"EmailId":req.query.EmailId}, (err, result) => {
      if (err) {
        res.send(err);
      }
       else {
        result.map(results => {
            const subject = 'Credentials Recived';
            const body = `Email Id: ${results.EmailId}<br>Password: ${results.Password}<br>Please Login Using these Credentials<br>Thank You.`;
            sendEmail(results.EmailId, subject, body);
        })
        res.send(result);
      }
    })
  }
  
  export const chnagepassword = (req, res) => {
    officersModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
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


export const indexofficer = (req, res) => {
    officersModel.find((err, offecires) => {
        if (err) {
            res.send(err);
        } else {
            res.send(offecires);
        }
    })
}

export const viewProfile = (req, res) => {
    officersModel.find({ "Name": req.query.Name }, (err, result) => {
        res.send(result.map(record => {
            return record;
        }));
    })
}


export const updateofficer = (req, res) => {
    officersModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            officersModel.find((err, offecires) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(offecires);
                }
            })
        }

    })
}


export const destroyofficer = (req, res) => {
    officersModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            officersModel.find({}, (err, offecire) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(offecire);
                }
            })
        }
    })
}


export const createcompany = (req, res) => {
    companysModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            companysModel.find((err, officer) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(officer);
                }
            })
        }
    })
}

export const indexcompany = (req, res) => {
    companysModel.find((err, officer) => {
        if (err) {
            res.send(err);
        } else {
            res.send(officer);
        }
    })
}
export const updatecompany = (req, res) => {
    companysModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            companysModel.find((err, officer) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(officer);
                }
            })
        }

    })
}


export const destroycompany = (req, res) => {
    companysModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            company.find({}, (err, officer) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(officer);
                }
            })
        }
    })
}

export const getdetails = (req, res) => {
    applyJobsModel.findById(req.params.id, (err, students) => {
        if (err) {
            res.send(err);
        } else {
            res.send(students);
        }
    })
}


export const createjob = (req, res) => {
    jobsModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            jobsModel.find((err, jobs) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(jobs);
                }
            })
        }
    })
}

export const viewJobs = (req, res) => {
    jobsModel.find((err, student) => {
        if (err) {
            res.send(err);
        } else {
            res.send(student);
        }
    })
}

export const updatejob = (req, res) => {
    jobsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            jobsModel.find((err, jobs) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(jobs);
                }
            })
        }

    })
}

export const status = (req, res) => {
    applyJobsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(updatedObj);
        }
    })
}


export const destroyjob = (req, res) => {
    jobsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            jobsModel.find({}, (err, jobs) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(jobs);
                }
            })
        }
    })
}


export const viewApplyJobs = (req, res) => {
    applyJobsModel.find((err, applyjob) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(applyjob);
        }
    })
}
