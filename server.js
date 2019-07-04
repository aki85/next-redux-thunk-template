const utils = require('./utils/module')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3000 : process.env.PORT
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get(/controller/, (req, res) => {
    const actualPage = '/_error'
    res.status(404);
    app.render(req, res, actualPage)
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})