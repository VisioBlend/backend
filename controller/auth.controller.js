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