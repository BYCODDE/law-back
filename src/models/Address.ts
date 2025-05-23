import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true },
)

const Address = mongoose.model('Address', addressSchema)

export default Address
