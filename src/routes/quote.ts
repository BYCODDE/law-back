import { Router } from 'express'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { quoteSchema, updateQuoteSchema } from '../validators/quote'
import { createQuote, getAllQuotes, updateQuote, deleteQuote } from '../controllers/quote'

const router = Router()

//public routes

router.get('/', getAllQuotes)

//admin routes

router.post('/', requireAdmin, validate(quoteSchema), createQuote)
router.put('/:id', requireAdmin, validate(updateQuoteSchema), updateQuote)
router.delete('/:id', requireAdmin, deleteQuote)

export default router
