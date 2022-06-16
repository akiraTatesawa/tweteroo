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
    tweet: "Olá Patrick!",
  },
  {
    username: "Naruto",
    avatar:
      "https://i.pinimg.com/originals/85/1b/ca/851bca4e7a0860ffaee2f647ee04b852.jpg",
    tweet: "Meu melhor amigo é o Sasuke!!",
  },
  {
    username: "sasuke uchiha",
    avatar:
      "https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg",
    tweet: "Não gosto muito do naruto...",
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
  res.send(tweets);
});

app.listen(PORT, () => {
  console.log(chalk.bgGreen.black.bold("Server is running..."));
});
