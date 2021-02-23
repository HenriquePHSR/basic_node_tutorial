const express = require('express')
const env = require('dotenv')
const fs = require('fs') // read and write files lib
const path = require('path')
const { extname } = require('path')
const URL = require('url')
const cors = require('cors')
const server = express()
const router = express.Router()


env.config()
port = process.env.API_PORT || 8080
data = require('./db.json')

server.use(cors())
server.use('/', router);

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
server.use(cors(corsOptions))

server.listen(port, () => {
    console.log(`API listen to ${port}`)
})

router.get('/', (req, res) => {
    const query = URL.parse(req.url, true).query.field;
    res.json(data[`${query}`]);
})