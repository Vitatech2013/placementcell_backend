import { Router } from 'express'

import {
  officerReg,
  officerlogin,
  forgotPassword,
  chnagepassword,
  indexofficer,
  updateofficer,
  destroyofficer,
  downloadFiles,
  viewProfile,
  createcompany,
  indexcompany,
  updatecompany,
  destroycompany,
  getdetails,
  createjob,
  viewJobs,
  updatejob,
  destroyjob,
  viewApplyJobs,
  status
} from './controller'

const router = new Router()

router.get('/officerlogin', officerlogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/viewjobdetails', viewJobs)

router.get('/viewapplyjob', viewApplyJobs)


router.get('/details/:id', getdetails)

router.get('/download/:id', downloadFiles)

router.put('/:id', updateofficer)

router.put('/statusupdate/:id', status)


router.get('/viewprofile', viewProfile)

router.post('/register', officerReg)

router.get('/view', indexofficer)

router.delete('/:id', destroyofficer)

router.post('/addcompany', createcompany)

router.get('/viewcompany', indexcompany)

router.put('/companyupdate/:id', updatecompany)

router.delete('/company/:id', destroycompany)

router.post('/addjob', createjob)

router.put('/jobupdate/:id', updatejob)

router.delete('/job/:id', destroyjob)


export default router