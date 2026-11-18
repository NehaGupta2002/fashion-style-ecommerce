import express from "express";
import * as userController from "../controller/user.controller";

// import { auth, isAdmin } from "../middleware/auth.middleware"

const router = express.Router();

router.post("/register",  userController.registerUser);
router.post("/login",  userController.loginUser);

router.get("/all",userController.getAllUsers); // Get all users
router.delete("/:id", userController.deleteUser); // Delete user by ID

export default router;





