import { Router } from 'express'
import {
  createBusiness,
  deleteBusiness,
  getAllBusinesses,
  updateBusiness,
} from '../controllers/business'
import { validate } from '../middlewares/validate'
import { requireAdmin } from '../middlewares/auth'
import { createBusinessSchema } from '../validators/business'

const router = Router()


//public routes
router.get('/', getAllBusinesses)

//admin routes
router.post('/', requireAdmin, validate(createBusinessSchema), createBusiness)
router.put('/:id', requireAdmin, validate(createBusinessSchema),updateBusiness)
router.delete('/:id', requireAdmin, deleteBusiness)

export default router
