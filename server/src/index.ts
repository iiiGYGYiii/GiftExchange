import app from "./server";
import { PORT } from "./config";
import connectMongoDB from "./mongo";

app.listen(PORT, () => {
  void connectMongoDB(); // Creates the connection with MongoDB
  console.log(`Server listening on Port: ${PORT}`);
});
