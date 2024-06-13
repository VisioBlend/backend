import { query } from "../database/db.js"

export const createNotes = async (req, res) => {
    try {
      const { title, datetime, note } = req.body
      const result = await query(
        "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?);",
        [title, datetime, note]
      )
  
      return res.status(200).json({ msg: "notes ditambahkan", data: { title, datetime, note } })
    } catch (error) {
      console.log("Terjadi kesalahan", e)
      return res.status(500).json({ msg: "terjadi kesalahan pada server" })
    }
  }
  
  export const getNotes = async (req, res) => {
    try {
      const notes = await query("SELECT * FROM notes")
      return res.status(200).json(notes)
    } catch (error) {
      console.log("Terjadi kesalahan", error)
      return res.status(500).json({ msg: "terjadi kesalahan pada server" })
    }
  }

  export const getNotesById = async (req, res) => {
    try {
      const { id } = req.params
      const note = await query("SELECT * FROM notes WHERE id = ?", [id])
      if (note.length === 0) {
        return res.status(404).json({ msg: "notes tidak ditemukan" })
      }
      return res.status(200).json(note[0])
    } catch (error) {
      console.log("Terjadi kesalahan", error)
      return res.status(500).json({ msg: "terjadi kesalahan pada server" })
    }
  }

  export const deleteNote = async (req, res) => {
    try {
      const { id } = req.params
      const note = await query("SELECT * FROM notes WHERE id = ?", [id])
      if (note.length === 0) {
        return res.status(404).json({ msg: "note tidak ditemukan" })
      }
      await query("DELETE FROM notes WHERE id = ?", [id])
      return res.status(200).json({ msg: "note dihapus" })
    } catch (error) {
      console.log("Terjadi kesalahan", error)
      return res.status(500).json({ msg: "terjadi kesalahan pada server" })
    }
  }

  export const updateNote = async (req, res) => {
    try {
      const { id } = req.params
      const { title, datetime, note } = req.body
      const notes = await query("SELECT * FROM notes WHERE id = ?", [id])
      if (notes.length === 0) {
        return res.status(404).json({ msg: "note tidak ditemukan" })
      }
      await query("UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?", [title, datetime, note, id])
      return res.status(200).json({ msg: "note diperbarui", data: { title, datetime, note } })
    } catch (error) {
      console.log("Terjadi kesalahan", error)
      return res.status(500).json({ msg: "terjadi kesalahan pada server" })
    }
  }