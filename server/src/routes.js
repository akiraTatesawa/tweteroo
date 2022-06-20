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

routes.get("/tweets", (req, res) => {
  const page = parseInt(req.query.page, 10);

  const limitTweetsPerPage = 10;
  const initialStartPoint = tweets.length - limitTweetsPerPage * page;
  const initialEndPoint = tweets.length - (page - 1) * limitTweetsPerPage;

  if (!page || page < 1) {
    return res.status(400).send("Informe uma página válida!");
  }

  const tweetsStartPoint = initialStartPoint < 0 ? 0 : initialStartPoint;
  const tweetsEndPoint = initialEndPoint < 0 ? 0 : initialEndPoint;

  return res.send(tweets.slice(tweetsStartPoint, tweetsEndPoint).reverse());
});

routes.get("/tweets/:username", (req, res) => {
  const { username } = req.params;

  const userTweets = tweets.filter(({ username: user }) => username === user);

  res.send(userTweets.reverse());
});
