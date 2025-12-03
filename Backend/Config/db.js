import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` sucessfully connected to db${conn.connection.host}`);
  } catch (error) {
    console.error("Failed to connect", error);
    process.exit(1);
  }
};

export default connectDb;
