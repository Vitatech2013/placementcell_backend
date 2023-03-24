import { Router } from 'express'

import {

  adminLogin,
  forgotPassword,
  chnagepassword,
  viewStudentDetails,
  updateStudentDetails,
  viewOfficersDetails,
  updateOfficerDetails,
  destroyStudents,
  destroyOfficers,
  viewCompanys,
  viewJobs,
  viewApplyJobs

} from './controller'

const router = new Router()


router.get('/adminlogin', adminLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/studentdata', viewStudentDetails)

router.get('/officerdata', viewOfficersDetails)

router.put('/studentupdate/:id', updateStudentDetails)

router.put('/officerupdate/:id', updateOfficerDetails)

router.delete('/student/:id', destroyStudents)

router.delete('/officer/:id', destroyOfficers)

router.get('/company', viewCompanys)

router.get('/job', viewJobs)

router.get('/applyjob', viewApplyJobs)


export default router
