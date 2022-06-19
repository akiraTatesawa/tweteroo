import express from "express";
import chalk from "chalk";
import { usersData, tweets } from "./database.js";

export const routes = express.Router();

let userData = {
  username: "",
  avatar: "",
};

routes.post("/sign-up", (req, res) => {
  userData = req.body;
  usersData.push(userData);
  console.log(
    chalk.green(
      `User ${chalk.bold(userData.username)} successfully registered\n`
    )
  );
  res.send("OK");
});

routes.post("/tweets", (req, res) => {
  const tweet = { ...req.body, avatar: userData.avatar };
  tweets.push(tweet);
  console.log(chalk.green("Tweet sent!\n"));
  res.send("OK");
});

routes.get("/tweets", (_req, res) => {
  const lastTenTweets = tweets.slice(tweets.length - 10, tweets.length);
  res.send(lastTenTweets.reverse());
});
