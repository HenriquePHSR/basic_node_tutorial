const os = require('os')
const log = require('./logger')


// run every n ms where n is a parameter
setInterval(() => {
    const { freemem, totalmem } = os
    const free = parseInt(freemem() / 1024 / 1024 )
    const total = parseInt(totalmem() / 1024 / 1024 )
    const percent = parseInt(( free / total ) * 100)
    
    const stats = {
        free: `${free} MB`,
        total: `${total} MB`,
        usage: `${percent} %`
    }
    
    console.clear()
    log(`${JSON.stringify(stats)}\n`)
    console.table(stats)
}, 1000) // @param [ a_callback, time in ms ]