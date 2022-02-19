const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Define our Route
const tutorRouter = require("./routes/tutors");
const clubRouter = require("./routes/clubs");
const uniRouter = require("./routes/university");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

function startKeepAlive() {
  setInterval(function () {
    var options = {
      host: "campuspalsdb.herokuapp.com",
      port: 80,
      path: "/",
    };
    http
      .get(options, function (res) {
        res.on("data", function (chunk) {
          try {
            // optional logging... disable after it's working
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/hello", function (req, res) {
  return res.send("Hello world");
});

// TODO #5 Mount the middleware for the routes served by the userRouter
// For all routes using the user schema, need append /users to the url.
// ie. http://localhost:5000/users/
app.use("/tutors", tutorRouter);
app.use("/clubs", clubRouter);
app.use("/uni", uniRouter);

// Pass in our defined port variable so our server can accept a parameter from the environment and what port to listen to
// Log to console to confirm it is running.
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
