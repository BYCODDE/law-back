import { Router } from 'express'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { practiceAreasSchema, updatePracticeAreasSchema } from '../validators/practiceAreas'
import { getallAreas, createAreas, updateAreas, deleteAreas } from '../controllers/practiceAreas'

const router = Router()

//public routes

router.get('/', getallAreas)

//admin routes

router.post('/', requireAdmin, validate(practiceAreasSchema), createAreas)
router.put('/:id', requireAdmin, validate(updatePracticeAreasSchema), updateAreas)
router.delete('/:id', requireAdmin, deleteAreas)

export default router
