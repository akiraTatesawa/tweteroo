import express from "express";
import chalk from "chalk";
import { usersData, tweets } from "./database.js";

export const routes = express.Router();

let userData = {
  username: "",
  avatar: "",
};

routes.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    console.log(chalk.red.bold("Please fill all the blanks\n"));
    return res.status(400).send("Todos os campos são obrigatórios");
  }

  userData = req.body;
  usersData.push(userData);

  console.log(
    chalk.green(
      `User ${chalk.bold(userData.username)} successfully registered\n`
    )
  );
  return res.status(201).send("OK");
});

routes.post("/tweets", (req, res) => {
  const username = req.get("user");
  const { tweet } = req.body;

  if (!username || !tweet) {
    console.log(chalk.red.bold("Please fill all the blanks\n"));
    return res.status(400).send("Todos os campos são obrigatórios");
  }

  const tweetData = { username, tweet, avatar: userData.avatar };
  tweets.push(tweetData);

  console.log(chalk.green("Tweet sent!\n"));
  return res.status(201).send("OK");
});

routes.get("/tweets", (_req, res) => {
  const lastTenTweets = tweets.slice(tweets.length - 10, tweets.length);
  return res.send(lastTenTweets.reverse());
});

routes.get("/tweets/:username", (req, res) => {
  const { username } = req.params;
  res.send(username);
});
