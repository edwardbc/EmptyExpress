const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  var dbconfig = require('opsworks');
  res.send(Object.keys(dbconfig))
  // res.send(Object.keys(process.env))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
