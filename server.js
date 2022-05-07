const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(require("./routes"));

app.listen(PORT, () => console.log("Now listening"));
// db.once("open", () => {
