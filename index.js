import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

import UsersRoute from "./Routes/UsersRoute.js";
import authRoute from "./Routes/authRoute.js";
import PollRoute from "./Routes/PollRoute.js";
import voteRoute from "./Routes/voteRoute.js";
import CommentRoute from "./Routes/CommentRoute.js";

const app = express();
dotenv.config();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

main().catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use("/backend/auth", upload.single('profilePic'), authRoute); // Add multer middleware here
app.use("/backend/users", UsersRoute);
app.use("/backend/poll", PollRoute);
app.use("/backend/vote", voteRoute);
app.use("/backend/comment", CommentRoute);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server is running on:${port}`);
});
