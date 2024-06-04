import express from 'express'
import authRoute from "./auth.route.js"

const router = express()

router.get('/', (req,res) => {
    res.send("hello world")
})

router.use(authRoute)

export default router