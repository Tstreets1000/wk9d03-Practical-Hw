const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

//======== Routes Start Here =============//

app.get("/greeting/:name", (req, res) => {
  const WHATS_UP = req.params.name;

  res.send(`Hello ${WHATS_UP}! It's so great to see you!`);
});

app.get("/total/:tipPercentage", (req, res) => {
  const makeItRain1 = req.params.total;
  const makeItRain2 = req.params.tipPercentage;

  const tipTotal = (makeItRain2 / makeItRain1) * 100;

  res.send(`${tipTotal}`);
});
//===== Fibonacci ========//

app.get("/magic/:WillIBeAMillionaire", (req, res) => {
  const eightBall = req.params.WillIBeAMillionaire;

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const randomWord = Math.floor(Math.random() * responses.length);
  const targetAnswer = responses[randomWord];

  res.send(targetAnswer);
});

//==========Routes End Here =============//

app.listen(3000, () => {
  console.log("Yes I am listening on port 3000");
});
