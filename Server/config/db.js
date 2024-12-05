import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONNECTION = process.env.MONGO;

const DataBase = async () => {
  try {
    await mongoose.connect(CONNECTION, {
      useUnifiedTopology: true,
    });
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default DataBase;
