import { Router } from 'express'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { createBanner, updateBanner, deleteBanner, getAllBanner } from '../controllers/banner'
import { bannerSchema } from '../validators/banner'
const router = Router()

//public routes

router.get('/', getAllBanner)

//admin routes

router.post('/', requireAdmin, validate(bannerSchema), createBanner)
router.put('/:id', requireAdmin, validate(bannerSchema), updateBanner)
router.delete('/:id', requireAdmin, deleteBanner)


export default router