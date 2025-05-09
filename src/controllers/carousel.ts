import { Request, Response } from 'express'
import Carousel from '../models/Carousel'

export const getAllCarousel = async (req: Request, res: Response) => {
  const items = await Carousel.find().sort({ createdAt: -1 }).limit(4)
  res.status(200).json(items)
}

export const createCarousel = async (req: Request, res: Response) => {
  try {
    const carousel = await Carousel.create(req.body)
    res.status(201).json(carousel)
  } catch (err) {
    console.error('CREATE ERROR:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateCarousel = async (req: Request, res: Response) => {
  const updatedItems = await Carousel.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if (!updatedItems) {
    res.status(404).json({ message: 'Carousel not found' })
    return
  }

  res.status(200).json(updatedItems)
}

export const deleteCarousel = async (req: Request, res: Response) => {
  const deletedItems = await Carousel.findByIdAndDelete(req.params.id)

  if (!deletedItems) {
    res.status(404).json({ message: 'Carousel not found' })
    return
  }

  res.status(200).json({ message: 'Carousel deleted successfully' })
}
