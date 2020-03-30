// stats page that should be rendered
// complete models
// roots
// /api /workouts does not return all the workouts
// CRUD operations (PUT etc.)


const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models/index-models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Routes go here
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index-public.html"));
});

app.get("/exercise-public", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise-public.html"));
});

app.get("/stats-public", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats-public.html"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
