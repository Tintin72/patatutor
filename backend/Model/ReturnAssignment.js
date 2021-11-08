const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const returnAssignmentSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  file: [String],
});

module.exports = ReturnAssignment = mongoose.model(
  "returnAssignments",
  returnAssignmentSchema
);
