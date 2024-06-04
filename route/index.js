import express from 'express'

const router = express()

router.get('/', (req,res) => {
    res.send("hello world")
})

export default router