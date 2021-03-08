const express = require('express')
const app = express()
const path = require('path')


const port = process.env.PORT || 5000

app.use(express.static("./client/public"))


app.get('/api/:id', (req,res) =>{
    res.sendFile(path.resolve(`./api/${req.params.id}.json`))
})

app.get('/api', (req, res) => {
    res.sendFile(path.resolve("./api/A1restaurantsIDs.json"))
})


app.listen(port, () => {
    console.log("Server running on port", port)
})