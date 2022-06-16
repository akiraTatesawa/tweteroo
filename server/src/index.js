import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let userData = {
  username: "",
  avatar: "",
};
const usersData = [];
const tweets = [
  {
    username: "bob esponja calça quadrada",
    avatar:
      "https://img.elo7.com.br/product/zoom/3222EB9/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-bob-esponja.jpg",
    tweet: "Tweet 1",
  },
  {
    username: "Naruto",
    avatar:
      "https://i.pinimg.com/originals/85/1b/ca/851bca4e7a0860ffaee2f647ee04b852.jpg",
    tweet: "Tweet 2",
  },
  {
    username: "sasuke uchiha",
    avatar:
      "https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg",
    tweet: "Tweet 3",
  },
  {
    username: "bob esponja calça quadrada",
    avatar:
      "https://img.elo7.com.br/product/zoom/3222EB9/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-bob-esponja.jpg",
    tweet: "Tweet 4",
  },
  {
    username: "Naruto",
    avatar:
      "https://i.pinimg.com/originals/85/1b/ca/851bca4e7a0860ffaee2f647ee04b852.jpg",
    tweet: "Tweet 5",
  },
  {
    username: "sasuke uchiha",
    avatar:
      "https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg",
    tweet: "Tweet 6",
  },
  {
    username: "bob esponja calça quadrada",
    avatar:
      "https://img.elo7.com.br/product/zoom/3222EB9/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-bob-esponja.jpg",
    tweet: "Tweet 7",
  },
  {
    username: "Naruto",
    avatar:
      "https://i.pinimg.com/originals/85/1b/ca/851bca4e7a0860ffaee2f647ee04b852.jpg",
    tweet: "Tweet 8",
  },
  {
    username: "sasuke uchiha",
    avatar:
      "https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg",
    tweet: "Tweet 9",
  },
  {
    username: "bob esponja calça quadrada",
    avatar:
      "https://img.elo7.com.br/product/zoom/3222EB9/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-bob-esponja.jpg",
    tweet: "Tweet 10",
  },
];

app.post("/sign-up", (req, res) => {
  userData = req.body;
  usersData.push(userData);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = { ...req.body, avatar: userData.avatar };
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (_req, res) => {
  const lastTenTweets = tweets.slice(tweets.length - 10, tweets.length);
  res.send(lastTenTweets.reverse());
});

app.listen(PORT, () => {
  console.log(chalk.bgGreen.black.bold("Server is running..."));
});
