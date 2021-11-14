import app from "./server";
import { PORT } from "./config";
import dotenv from "dotenv";
dotenv.config();

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
