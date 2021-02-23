const express = require('express')
const env = require('dotenv')
const fs = require('fs') // read and write files lib
const path = require('path')
const { extname } = require('path')
const server = express();
const router = express.Router();

env.config()
port = process.env.PORT || 2560

server.listen(port, () => {
    console.log(`server listen to ${port}`)
})

server.use('/', router);
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
router.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})