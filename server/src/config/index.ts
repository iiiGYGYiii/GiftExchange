import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const MONGO_URI =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_DEV_URI
    : process.env.MONGO_PROD_URI;
