const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require("cors")
const port = 9050

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/qrcode', (req, res) => {
    const { query } = req
    console.log({ query })
    const qrcode = JSON.stringify(query)
    const token = jwt.sign(qrcode, "banana")
    return res.json({ qrcode: token })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})