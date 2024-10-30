import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// /${DB_NAME}

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `MONGODB CONNECTED SUCCESSFULLY !! HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB CONNECTION ERROR ${error}`);
    process.exit(1);
  }
};

export default connectDB;
