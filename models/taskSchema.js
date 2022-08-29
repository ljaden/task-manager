const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = new model("Task", TaskSchema);
