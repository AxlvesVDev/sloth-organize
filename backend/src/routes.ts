import { Router } from "express";
import { registerUser, loginUser } from "./controller/authController";
import { createTask } from "./controller/taskController";
import { getTasks } from "./controller/taskController";
import { updateTask } from "./controller/taskController";
import { deleteTask } from "./controller/taskController";
import { completeTask } from "./controller/taskController";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/tasks", createTask);
router.get("/tasks/:userId", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.patch(
  "/tasks/:id/complete",
  completeTask
);

export default router; 