import { Request, Response } from 'express'
import Banner from '../models/Banner'

export const getAllBanner = async (req: Request, res: Response) => {
  const items = await Banner.find().sort({ createdAt: -1 }).limit(2)
  res.status(200).json(items)
}

export const createBanner = async (req: Request, res: Response) => {
  try {
    const banner = await Banner.create(req.body)
    res.status(201).json(banner)
  } catch (error) {
    console.error('CREATE ERROR:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateBanner = async (req: Request, res: Response) => {
  try {
    const updatedItems = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedItems) {
      res.status(400).json({ message: 'Banner item not found' })
      return
    }

    res.status(200).json({
      message: 'Banner item updated successfully',
      updatedItems,
    })
  } catch (error) {
    console.error('UPDATE ERROR:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const deletedItems = await Banner.findByIdAndDelete(req.params.id)
    if (!deletedItems) {
      res.status(400).json({ message: 'Banner item not found' })
      return
    }
    res.status(200).json({
      message: 'Banner item deleted  successfully ',
      deletedItems,
    })
  } catch (error) {
    console.error('DELETE ERROR:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
