import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth'
import carouselRoutes from './routes/carousel'
import bannerRoutes from './routes/banner'
import quoteRoutes from './routes/quote'
import latestNewsRoutes from './routes/latestNews'
import practiceAreaRoutes from './routes/practiceAreas'
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)

app.use('/api/carousel', carouselRoutes)

app.use('/api/banner', bannerRoutes)

app.use('/api/quotes', quoteRoutes)

app.use('/api/latestnews', latestNewsRoutes)
app.use('/api/practiceareas', practiceAreaRoutes)

export default app
