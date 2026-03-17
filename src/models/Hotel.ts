import mongoose from 'mongoose';

const BookedDateSchema = new mongoose.Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
}, { _id: false });

const HotelSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  tags: [{ type: String }],
  blurb: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  images: [{ type: String }],
  pricePerNight: { type: Number, default: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  amenities: [{ type: String }],
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ownerEmail: { type: String, default: '' },
  bookedDates: [BookedDateSchema],
}, { timestamps: true });

export default mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema);

