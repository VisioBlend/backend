import express from 'express'
import authRoute from "./auth.route.js"
import noteRoute from "./note.route.js"
const router = express()

router.get('/', (req,res) => {
    res.send("hello world")
})

router.use(authRoute)
router.use(noteRoute)

export default router