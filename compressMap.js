const map = require('./fifa-world-map.source.json')
const fs = require('fs')
fs.writeFileSync('fifa-world-map.json', JSON.stringify(map))
