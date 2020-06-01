const express = require('express')
const http = require('http')
const reload = require('reload')
// const opn = require('opn')


const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('/', './')
app.use(express.static('./'))

app.get('/', (req, res) => res.render('index'))

// localhost 8080
const server = http.createServer(app)
server.listen(3000, function() {
  console.log('Listening to port 3000...')
})

// opn('http://localhost:8080')

reload(app)
