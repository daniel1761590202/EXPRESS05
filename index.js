//import express from "express";
const express = require("express")
// import datal from "./singers.json" assert { type: "json" };
// const { singers } = datal;
const {singers} = require("./singers.json")

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
});

///singer/:id.html

app.get("/singer/:id.html", (req, res) => {
  const { id } = req.params;
  let result = singers.find((singer) => singer.id === parseInt(id));
  if (!result) {
    res.status(404).send("<h1>找不到</h1>");
    return false;
  }
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${result.singer_name}的頁面</title>
  </head>
  <body>
    <h1>${result.singer_name}的頁面</h1>
    <img src="${result.singer_img}" alt="">
  </body>
  </html>`)
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});