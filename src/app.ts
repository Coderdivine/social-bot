import express from "express";
import mediaRouter from "./routes/mediaRoutes";
import tweetRouter from "./routes/tweetRoutes";
import cron from "node-cron";
import { exec } from "child_process";
import { postTextTweet } from "./services/tweetService";

const app = express();
app.use(express.json());

app.use("/media", mediaRouter);
app.use("/tweets", tweetRouter);

cron.schedule("0 * * * *", async () => {
  try {
    const res = await postTextTweet("Minute update from DivTheCreator!");
    console.log("🕒 Cron tweeted ID:", res.id);
  } catch (e) {
    console.error("Cron error:", e);
  }
});


export default app;
