import { Router } from 'express'
import { requireAdmin } from '../middlewares/auth'
import { validate } from '../middlewares/validate'
import { latestNewsSchema, updateLatestNewsSchema } from '../validators/latestNews'
import {
  getAllNews,
  createLatestNews,
  updateLatestNews,
  deleteLatestNews,
} from '../controllers/latestNews'

const router = Router()

// user  routes

router.get('/', getAllNews)


// admin routes

router.post('/', requireAdmin, validate(latestNewsSchema), createLatestNews)
router.put('/:id', requireAdmin, validate(updateLatestNewsSchema), updateLatestNews)
router.delete('/:id', requireAdmin, deleteLatestNews)


export default router






/**
 * @swagger
 * /api/latest-news:
 *   get:
 *     summary: Get all latest news entries
 *     tags: [LatestNews]
 *     responses:
 *       200:
 *         description: List of latest news items
 */

/**
 * @swagger
 * /api/latest-news:
 *   post:
 *     summary: Create a latest news entry
 *     tags: [LatestNews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Training Program Launched"
 *               content:
 *                 type: string
 *                 example: "We are excited to announce a new Krav Maga training course starting next month..."
 *               imageUrl:
 *                 type: string
 *                 example: "https://example.com/news-image.jpg"
 *     responses:
 *       201:
 *         description: News created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/latest-news/{id}:
 *   put:
 *     summary: Update a latest news entry
 *     tags: [LatestNews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated News Title"
 *               content:
 *                 type: string
 *                 example: "Updated content of the news article..."
 *               imageUrl:
 *                 type: string
 *                 example: "https://example.com/updated-image.jpg"
 *     responses:
 *       200:
 *         description: News updated
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: News not found
 */

/**
 * @swagger
 * /api/latest-news/{id}:
 *   delete:
 *     summary: Delete a latest news entry
 *     tags: [LatestNews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: News deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: News not found
 */
