import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noticesRouter from "./routes/notices.js";

dotenv.config();

const app = express();
const port = 3001;
const clientUrl = "http://localhost:3001";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error) => {
    console.log("Unable to connect to DB");
    console.log(error);
  });

app.use(express.json());

// http://localhost:3001/notices
app.use("/notices", noticesRouter);

// !! Your middleware should not go below this line !!

// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
