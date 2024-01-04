import mongoose from "mongoose";

const DATABASE = "";

async function connectDB() {
  mongoose.connect(DATABASE);

  return mongoose.connection;
}

export default connectDB;
