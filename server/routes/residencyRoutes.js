import express from 'express'
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js'


const router = express.Router()


router.post('/create', createResidency)
router.get('/all-residencies', getAllResidencies)
router.get('/:id', getResidency)

export default router