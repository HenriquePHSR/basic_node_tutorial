const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
const emitter = new EventEmitter()

emitter.on('log', message => { // listen for event log
    fs.appendFile(path.join(__dirname,'log.txt'),message,(err) => {
        if (err) throw err
        //console.log(err)
    })
})
function log(message) { // emit a log event
    emitter.emit('log', message)
}

module.exports = log // set i'm aviable for export