const router = require("express").Router();
let { Club } = require("../models/models");

router.route("/").get((req, res) => {
  Club.find() //
    .then((clubs) => res.json(clubs)) //
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * GET ONE (GET REQUEST)
 *
 * Access via: http://localhost:5000/clubs/:id
 * Example: http://localhost:5000/clubs/5f4c647904dcad4a242735e8
 *
 * A route for getting a single user's information based on the user's MongoDB id.
 * The :id is like a variable. This is object id that is created automatically by mongoDB.
 */

router.get("/:id", (req, res) => {
  //endpoint for accessing single user by id in database
  Club.findById(req.params.id) // find it by id
    .then((user) => res.send(user)) //then return as json ; else return error
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * POST ONE (POST REQUEST)
 *
 * Access via: http://localhost:5000/clubs/add
 *
 * This route is for adding a user to the database. It requires the user schema in JSON format to be filled in and the request set to POST.
 */

router.post("/add", (req, res) => {
  const clubName = req.body.clubName;
  const imgURL = req.body.imgURL;
  const website = req.body.website;
  const description = req.body.description;
  const university = req.body.university;
  const email = req.body.email;

  const newClub = new Club({
    clubName,
    imgURL,
    website,
    description,
    university,
    email,
  });

  newClub
    .save() // save the new user to the databse
    .then(() => res.json("Club added!")) // return prompt that user is added; else return error message
    .catch((err) => res.status(400).json("Error: " + err));
});

//For all these router files, need to export router
module.exports = router;
