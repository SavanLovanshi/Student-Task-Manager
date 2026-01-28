const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve frontend permanently
app.use(express.static(path.join(__dirname, "public")));

// ✅ Force homepage fallback (KEY FIX)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const FILE = path.join(__dirname, "tasks.json");

const readTasks = () => {
  return JSON.parse(fs.readFileSync(FILE));
};

const writeTasks = (tasks) => {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

// Add Task API
app.post("/add-task", (req, res) => {
  const tasks = readTasks();
  tasks.push({ task: req.body.task });
  writeTasks(tasks);
  res.json({ message: "Task added" });
});

// List Tasks API
app.get("/tasks", (req, res) => {
  res.json(readTasks());
});

// ✅ Catch-all (NO Cannot GET ever)
app.use((req, res) => {
  res.status(404).send("404 - Route Not Found");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
