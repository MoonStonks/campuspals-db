// Define our router variable from Express and Tutor variable which makes use of the MongoDB schema we created.
const router = require("express").Router();
let { Tutor } = require("../models/models");

/** GET ALL (GET REQUEST)
 *
 * Access via: http://localhost:5000/tutors/
 *
 * Example route utilizing a get request to get all the users in the database.
 * This route handles incoming HTTP get requests from the /users path
 * Tutor.find() is a mongoose method that gets all the users from mongoose atlas database.
 * For the .then line, after it finds all the users it returns the users in json format that we got from database
 * if there's error - return a error 400 with the message
 */
router.route("/").get((req, res) => {
  Tutor.find() //
    .then((users) => res.json(users)) //
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * GET ONE (GET REQUEST)
 *
 * Access via: http://localhost:5000/tutors/:id
 * Example: http://localhost:5000/tutors/5f4c647904dcad4a242735e8
 *
 * A route for getting a single user's information based on the user's MongoDB id.
 * The :id is like a variable. This is object id that is created automatically by mongoDB.
 */

router.get("/:id", (req, res) => {
  //endpoint for accessing single user by id in database
  Tutor.findById(req.params.id) // find it by id
    .then((tutor) => res.send(tutor)) //then return as json ; else return error
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * POST ONE (POST REQUEST)
 *
 * Access via: http://localhost:5000/tutors/add
 *
 * This route is for adding a tutor to the database.

 */

router.post("/add", (req, res) => {
  const title = req.body.title;
  const name = req.body.name;
  const description = req.body.description;
  const website = req.body.website;
  const rate = req.body.rate;
  const photoURL = req.body.photoURL;

  const newTutor = new Tutor({
    title,
    name,
    description,
    website,
    rate,
    photoURL,
  });

  newTutor
    .save() // save the new tutor to the databse
    .then(() => res.json("Tutor added!")) // return prompt that user is added; else return error message
    .catch((err) => res.status(400).json("Error: " + err));
});

//For all these router files, need to export router
module.exports = router;
