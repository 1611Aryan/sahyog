import mongoose from 'mongoose';
import { MONGO_URI } from '../env.js';

const MongooseConfig = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URI);
    console.info('MongoDB connected');
  } catch (err: any) {
    console.error(new Error(err));
  }
};

export default MongooseConfig;
