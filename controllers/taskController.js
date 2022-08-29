const db = require("../models/taskSchema");

/*
  Queries DB and returns all task
*/
const getAllTask = async (req, res) => {
  try {
    const task = await db.find({});
    console.log("getAllTask");
    res.send(task);
  } catch (error) {
    console.log(error);
  }
};

/*
  Queries DB and returns a SPECIFIC task
*/
const getSpecificTask = async (req, res) => {
  res.send(`GET ONE SPECIFIC TASK ${req.params.id}`);
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
    console.log(error);
  }
};

/*
  Update specific task
*/
const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const updatedTask = req.body;

    const results = await db.findByIdAndUpdate({ _id: taskID }, updatedTask, {
      returnDocument: "after",
    });

    res.status(200).json({
      message: updatedTask,
    });
  } catch (error) {
    console.log(error);
  }
};

/*
  DELETE specific task
*/
const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    await db.deleteOne({ _id: taskID });

    res.status(200).json({
      statusCode: 200,
      taskID: taskID,
      message: "Success! Task was removed!",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTask,
  getSpecificTask,
  createTask,
  updateTask,
  deleteTask,
};