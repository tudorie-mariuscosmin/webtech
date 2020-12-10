const { response } = require('express');
const express = require('express')
const bodyParser = require('body-parser')
const kittenRouter = require('./routers/kittenRouter')

const app = express();

app.locals.kittens = []
for (let i = 0; i < 100; i++) {
    app.locals.kittens.push({
        id: i,
        name: 'kitten ' + i,
        color: 'some color',
        weight: i % 10
    })
}

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use(bodyParser.json())

app.use((req, res, next) => {
    if (req.headers['kitten-secret'] === 'supersecret') {
        next()
    } else {
        res.status(401).json({ message: 'you must have the secret' })
    }
})

app.use('/kitten-api', kittenRouter)



const PORT = 8080
app.listen(PORT, () => console.log(`server running on port ${PORT}`))