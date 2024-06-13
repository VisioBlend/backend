import express from "express"
import { register, getUsers, getUserById, deleteUser, updateUser } from "../controller/auth.controller.js"

const router = express()

router.post("/register", register)
router.get("/users", getUsers)
router.get("/users/:id", getUserById)
router.delete("/users/:id", deleteUser)
router.patch("/users/:id", updateUser)

export default router
