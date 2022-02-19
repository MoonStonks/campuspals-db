const router = require("express").Router();

const universities = {
  universites: [
    {
      id: 0,
      name: "UBC",
      longname: "University of British Columbia",
    },
    {
      id: 1,
      name: "SFU",
      longname: "Simon Fraser University",
    },
  ],
};

router.route("/").get((req, res) => {
  console.log(JSON.stringify(universities));
  res.send(JSON.stringify(universities));
});

//For all these router files, need to export router
module.exports = router;
