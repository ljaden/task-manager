const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: [true, "Task field cannot be empty."],
    trim: true,
    maxlength: [25, "Task is too long (length < 25)"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = new model("Task", TaskSchema);
