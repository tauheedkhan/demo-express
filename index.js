const express = require('express')
const app = express()
const port = 3000

app.get('/*', (req, res) => {
    console.log('request:: ', req)
  //  res.send(JSON.parse(req))
    let resp = {
        header: req.headers,
        query: req.query,
       path: req.path
    }
    res.json(resp)
})

app.post('/*', (req, res) => {
    let resp = {
        header: req.headers,
        query: req.query,
       path: req.path,
        body: req.body
    }
    res.json(resp)
    res.status(400)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
