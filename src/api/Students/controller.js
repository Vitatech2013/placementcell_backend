import studentsModel from '../Common/studentsModel';
import companysModel from '../Common/companysModel';
import jobsModel from '../Common/jobsModel';
import applyJobsModel from '../Common/applyJobsModel';
import {sendEmail} from '../Common/email';



export const studentReg = (req, res) => {
  studentsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are Successfully Registered in Placement Cell...<br>Please Login Using below Credentials<br>Emailid: ${req.body.emailid}<br>Password: ${req.body.password}<br>Thank You.`;      
      sendEmail(req.body.emailid, subject, body);
          res.send(result);
        }
      })
}


export const studentLogin = (req, res) => {
  studentsModel.findOne({ "emailid": req.query.emailid, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}
export const forgotPassword = (req, res) => {
  studentsModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {    
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `emailid: ${results.emailid}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(results.emailid, subject, body);
      })
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  studentsModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}



export const GetData = (req, res) => {
  studentsModel.find({}, (err, students) => {
    if (err) {
      res.send(err);
    } else {
      res.send(students);
    }
  })
}

export const viewProfile = (req, res) => {
  studentsModel.find({ "emailid": req.query.emailid }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}




export const viewstudent = (req, res) => {
  studentsModel.find({ "studentname": req.query.studentname, "emailid": req.query.emailid }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}



export const updatestudents = (req, res) => {
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

export const downloadFiles = (req, res) => {
  studentsModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}



export const viewCompanys = (req, res) => {
  companysModel.find((err, student) => {
    if (err) {
      res.send(err);
    } else {
      res.send(student);
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

export const createapplyjob = (req, res) => {
  applyJobsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}




export const viewapplyjob2 = (req, res) => {
  applyJobsModel.find((err, student) => {
    if (err) {
      res.send(err);
    } else {
      res.send(student);
    }
  })
}

export const updateapplyjob = (req, res) => {
  applyJobsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(students);
    }

  })
}


export const destroyapplyjob = (req, res) => {
  applyJobsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(applyjobs);
    }
  })
}