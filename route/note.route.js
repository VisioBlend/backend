import express from "express"
import { createNotes, getNotes, getNotesById, deleteNote, updateNote  } from "../controller/notes.controller.js"

const router = express()

router.post("/tambah", createNotes)
router.get("/lihatnotes", getNotes)
router.get("/lihatnotesid/:id", getNotesById)
router.delete("/hapusnote/:id", deleteNote)
router.patch("/updatenote/:id", updateNote)

export default router
