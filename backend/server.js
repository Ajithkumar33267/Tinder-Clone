import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:0ZaQHdaJCvwo6KaP@cluster0.mjhnsd1.mongodb.net/tinerDb?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

// 9EccNRS4uquNvsYZ

//DB Config
mongoose.set('strictQuery', false)
mongoose.connect(connection_url)

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello AK"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if (err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})
//listeners
app.listen(port, () => console.log(`Listening on localhost: ${port}`))