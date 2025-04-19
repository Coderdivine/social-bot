import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { handleError } from '../utils/errorHandler';

dotenv.config();

const { MONGO_URI } = process.env;
if (!MONGO_URI) {
  throw new Error('MONGO_URI must be defined');
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => handleError(err));
