const express= require('express');
// Load env Variables.
require('dotenv').config();

// Constants
const PORT = 8081;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json()); // Middleware

// Data base connection.
const connectDb = require("./config/db");
connectDb(); // Stablish database connection.
// Global Variables
const USER_ROUTER = require("./routes/userRouter");
const MOVIE_ROUTER = require("./routes/movieRoutes");
const THEATER_ROUTER = require("./routes/theatreRoute");
const SHOW_ROUTER = require("./routes/showRoute");

// Routes.
app.use("/api/users", USER_ROUTER);
app.use("/api/movies", MOVIE_ROUTER);
app.use("/api/theatres", THEATER_ROUTER);
app.use("/api/shows", SHOW_ROUTER);


app.get("/", (req, res) =>
    res.status(201).send("Welcome to the home page.")
);

app.use((req, res) =>
    res.status(404).json({ message: "page not found" })
);

// Start the server.
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});
