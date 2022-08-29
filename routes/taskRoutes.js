const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllTask,
  getSpecificTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Routes
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSpecificTask).patch(updateTask).delete(deleteTask);

// Export
module.exports = router;
