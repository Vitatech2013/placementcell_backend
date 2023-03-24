import { Router } from 'express'

import Admin from './Admin'

import Students from './Students'

import Officers from './Officers'

const router = new Router()

router.use('/student', Students)

router.use('/admin', Admin)

router.use('/officer', Officers)


export default router
