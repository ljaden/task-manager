const db = require("../models/taskSchema");

/*
  Queries DB and returns all task
*/
const getAllTask = async (req, res) => {
  try {
    const task = await db.find({});
    res.send(task);
    // res.render("index", { task: task });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error,
    });
  }
};

/*
  Queries DB and returns a SPECIFIC task
*/
const getTask = async (req, res) => {
  try {
    const task = await db.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({
      statusCode: 404,
      message: error,
    });
  }
};

/*
  Creates task and post to DB
*/
const createTask = async (req, res) => {
  try {
    const task = req.body;
    const newTask = await db.create({
      taskName: task["name"],
      completed: task["completed"],
    });
    res.status(201).json({
      statusCode: 201,
      message: "Task Created!",
      task: {
        newTask,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error,
    });
  }
};

/*
  Update specific task
*/
const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const updatedTask = req.body;

    const task = await db.findByIdAndUpdate({ _id: taskID }, updatedTask, {
      returnDocument: "after",
    });

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        message: `No task found with id: ${taskID}`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: {
        update: updatedTask,
        result: task,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error,
    });
  }
};

/*
  DELETE specific task
*/
const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await db.findByIdAndDelete(taskID);

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        taskID: taskID,
        message: `No task found with id : ${taskID}`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      taskID: taskID,
      message: "Success! Task was removed!",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error,
    });
  }
};

module.exports = {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
