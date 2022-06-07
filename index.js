require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connection = require("./db");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auths");
const songsRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlists");
const searchSongs = require("./routes/search");

const app = express();

connection();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songsRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/", searchSongs);
const port = process.env.PORT || 8080;

app.listen(port, console.log(`Listening on port ${port}...`));
