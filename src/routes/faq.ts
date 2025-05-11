import { Router } from 'express'
import { getAllFaqs, createFaq, updateFaq, deleteFaq } from '../controllers/faq'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { faqSchema } from '../validators/faq'

const router = Router()

//public routes
router.get('/', getAllFaqs)

//admin routes
router.post('/', requireAdmin, validate(faqSchema), createFaq)
router.put('/:id', requireAdmin, validate(faqSchema), updateFaq)
router.delete('/:id', requireAdmin, deleteFaq)

export default router
