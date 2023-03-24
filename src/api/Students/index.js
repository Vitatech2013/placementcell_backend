import { Router } from 'express'

import {
  studentReg,
  GetData,
  updatestudents,
  studentLogin,
  forgotPassword,
  chnagepassword,
  viewProfile,
  viewstudent,
  viewCompanys,
  viewJobs,
  createapplyjob,
  viewapplyjob2,
  updateapplyjob,
  downloadFiles,
  destroyapplyjob

} from './controller'

const router = new Router()


router.post('/registration', studentReg)

router.get('/viewstudents', viewstudent)

router.post('/applyjob', createapplyjob)

router.get('/studentlogin', studentLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/studentdata', GetData)

router.get('/viewprofile', viewProfile)

router.put('/updateprofile/:id', updatestudents)

router.get('/viewcompany', viewCompanys)

router.get('/viewjob', viewJobs)

router.get('/download/:id', downloadFiles)

router.get('/applyjob', viewapplyjob2)

router.put('/update/:id', updateapplyjob)

router.delete('/applyjob/:id', destroyapplyjob)

export default router
