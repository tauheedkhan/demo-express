const express = require('express')
const app = express()
const port = 3000

app.get('/*', (req, res) => {
    console.log('request:: ', req)
  //  res.send(JSON.parse(req))
    res.json(req.headers)
})

app.post('/', (req, res) => {
    res.json(req.headers)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
