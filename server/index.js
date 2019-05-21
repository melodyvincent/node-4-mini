require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const { SERVER_PORT, SECRET_SESSION } = process.env
const messageCtrl = require('./messageCtrl')
const session = require('express-session')

app.use(
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    }))


app.get('/api/messages', messageCtrl.getAllMessage)
app.post('/api/message', messageCtrl.createMessage)
app.get('/api/messages/history', messageCtrl.history)


app.listen(SERVER_PORT, () =>
  console.log(`Server listening on ${SERVER_PORT}`)
);