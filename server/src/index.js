import express from "express";
import chalk from "chalk";

const app = express();

app.listen(5000, () => {
  console.log(chalk.bgGreen.black.bold("Server is running..."));
});
