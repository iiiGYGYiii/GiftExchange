import mongoose from "mongoose";
import { MONGO_URI } from "../config";

export default async function connectMongoDB(): Promise<void> {
  if (!MONGO_URI && mongoose.connection.readyState) return;
  try {
    await mongoose.connect(MONGO_URI as string);
  } catch (error) {
    console.error("There exist an error while connecting to MONGO DB.");
  }
}
