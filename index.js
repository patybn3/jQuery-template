const express = require('express')
const http = require('http')
const reload = require('reload')
// const opn = require('opn')


const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('src', './src')
app.use(express.static('src'))

app.get('/', (req, res) => res.render('index'))

const server = http.createServer(app)
server.listen(8080, function() {
  console.log('Listening to port 8080...')
})

// opn('http://localhost:8080')

reload(app)
