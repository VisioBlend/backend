import { query } from "../database/db.js"

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    )

    return res.status(200).json({ msg: "user ditambahkan", data: { email, password } })
  } catch (error) {
    console.log("Terjadi kesalahan", e)
    return res.status(500).json({ msg: "terjadi kesalahan pada server" })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await query("SELECT * FROM users")
    return res.status(200).json(users)
  } catch (error) {
    console.log("Terjadi kesalahan", error)
    return res.status(500).json({ msg: "terjadi kesalahan pada server" })
  }
}

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await query("SELECT * FROM users WHERE id = ?", [id])
    if (user.length === 0) {
      return res.status(404).json({ msg: "User tidak ditemukan" })
    }
    return res.status(200).json(user[0])
  } catch (error) {
    console.log("Terjadi kesalahan", error)
    return res.status(500).json({ msg: "terjadi kesalahan pada server" })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await query("SELECT * FROM users WHERE id = ?", [id])
    if (user.length === 0) {
      return res.status(404).json({ msg: "User tidak ditemukan" })
    }
    await query("DELETE FROM users WHERE id = ?", [id])
    return res.status(200).json({ msg: "User dihapus" })
  } catch (error) {
    console.log("Terjadi kesalahan", error)
    return res.status(500).json({ msg: "terjadi kesalahan pada server" })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { email, password } = req.body
    const user = await query("SELECT * FROM users WHERE id = ?", [id])
    if (user.length === 0) {
      return res.status(404).json({ msg: "User tidak ditemukan" })
    }
    await query("UPDATE users SET email = ?, password = ? WHERE id = ?", [email, password, id])
    return res.status(200).json({ msg: "User diperbarui", data: { email, password } })
  } catch (error) {
    console.log("Terjadi kesalahan", error)
    return res.status(500).json({ msg: "terjadi kesalahan pada server" })
  }
}
