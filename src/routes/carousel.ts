import { Router } from 'express'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { carouselSchema ,updateCarouselSchema} from '../validators/carousel'
import {
  getAllCarousel,
  createCarousel,
  updateCarousel,
  deleteCarousel,
} from '../controllers/carousel'

const router = Router()

// public routes

router.get('/', getAllCarousel)

//admin routes

router.post('/', requireAdmin, validate(carouselSchema), createCarousel)
router.put('/:id', requireAdmin, validate(updateCarouselSchema), updateCarousel)
router.delete('/:id', requireAdmin, deleteCarousel)

export default router
