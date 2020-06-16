const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const pathToPublic = path.join(__dirname, '../public')
const app = express()

app.use(express.static(pathToPublic))

app.get('*', (req, res) => {
    res.sendFile(path.join(pathToPublic, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})