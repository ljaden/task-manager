const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Routes
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// Export
module.exports = router;
