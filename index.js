const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Daily Quotes API')
})

app.get('/quote', (req, res) => {
  fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error')
    const q = JSON.parse(data)
    const rand = q[Math.floor(Math.random() * q.length)]
    res.send(rand)
  })
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})
