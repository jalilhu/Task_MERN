const asyncHandler = require("express-async-handler");
const Task = require("../models/Task");

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.status(200).json(task);
};

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a task");
  }
  const task = await Task.create({text: req.body.text})
  res.status(200).json(task);
});
const deleteTask = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const task = await Task.findById(id)

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  
  await Task.deleteOne({_id: id})
  res.status(200).json("task has been deleted")
})

module.exports = {
  getTaskById,
  getTasks,
  setTask,
  deleteTask,
};
