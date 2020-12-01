const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  testGroup: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    enum: ["E2E", "Regression", "Unitaire"],
    default: "Unitaire",
  },
  testedDates: {
    type: [
      {
        date: {
          type: Date,
          required: true,
        },
        result: {
          type: String,
          required: true,
          enum: ["passed", "failure"],
        },
      },
    ],
    default: [{ date: new Date(), result: "failure" }],
  },
  dependance: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Test", testSchema);
