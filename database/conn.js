
import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.local.MONGO_URI);

    if (connection.readyState == 1) {
      console.log('DB connected....');
    }
  } catch (error) {
    return Promise.rejected(error);
  }
};
export default connectMongo;
  