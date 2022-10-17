const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// added libraries
app.use('/lib', express.static(__dirname + '/lib'))
app.use('/lib/vue/dist', express.static(__dirname + '/node_modules/vue/dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/example/demo.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
