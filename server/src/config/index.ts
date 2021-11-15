import path from "path";
import dotenv from "dotenv";
dotenv.config();

export const PORT =
  process.env.NODE_ENV === "development" ? 3001 : process.env.PORT || 3000;
export const MONGO_URI =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_DEV_URI
    : process.env.MONGO_PROD_URI;
const cwd = process.cwd().split("\\");
cwd.pop();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const PWD =
  process.env.NODE_ENV === "development"
    ? path.join(cwd.join("\\"), "client/client/")
    : path.join(process.cwd(), "build/client/");
