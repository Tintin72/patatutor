const express = require("express");
const router = express.Router();
const ReturnAssignment = require("../Model/ReturnAssignment");

router.post("/add-student-assignment", (req, res) => {
  let returnAssignment = new ReturnAssignment(req.body);

  returnAssignment
    .save()
    .then((assign) => {
      res.status(200).json({ assignment: "assignment uploaded successfully" });
    })
    .catch((err) => {
      res.status(400).send("uploading assignment failed");
    });
});

router.get("/all", (req, res) => {
  ReturnAssignment.find((err, assig) => {
    if (err) {
      console.log(err);
    } else {
      res.json(assig);
    }
  });
});

module.exports = router;
