require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const app = express();
// Routes
const taskRoute = require("./routes/taskRoutes");
// Database
const connectDB = require("./config/db");

// Middleware
app.use(express.json());

// Default root route
app.use("/api/v1/tasks", taskRoute);

// Start Server
const startServer = async () => {
  try {
    // Connect to database
    await connectDB(process.env.URI);

    // PORT
    const PORT = process.env.PORT || 8000;
    // Start server
    app.listen(PORT, () => {
      console.log(`Connected to DB ...\nLive Server - PORT:${PORT} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

/*
  GET - queries db for all task
  POST - allows user(s) to post their task
  PUT - allows user(s) to edit task
  DELETE - deletes task
  --------------------
  GET           '/api/v1/tasks'       - GET ALL TASK
  GET           '/api/v1/tasks/:id'   - GET SPECIFIC TASK
  POST          '/api/v1/tasks'       - CREATE A NEW TASK
  PATCH/PUT     '/api/v1/tasks/:id    - EDIT A TASK
  DELETE        '/api/v1/tasks/:id    - REMOVE A TASK

*/
