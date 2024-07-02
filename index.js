import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import dotenv from "dotenv";

import UsersRoute from "./Routes/UsersRoute.js";
import authRoute from "./Routes/authRoute.js";
import PollRoute from "./Routes/PollRoute.js";
import voteRoute from "./Routes/voteRoute.js";

const app = express();
import CommentRoute from "./Routes/CommentRoute.js"
dotenv.config();
main().catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use("/backend/auth", authRoute);
app.use("/backend/users", UsersRoute);
app.use("/backend/poll", PollRoute);
app.use("/backend/vote", voteRoute);
app.use("/backend/comment", CommentRoute

);
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
app.listen(port, () => {
  console.log(`Server is running on:${port}`);
});
