const express = require ('express')
const mongoDB = require ('mongoDB')

//console.log('hello')

const app = express()
const port = 3000
app.get('/', (req, res)  =>
res.send('hello world!'))

app.listen (port, ()=>
console.log(`Example app listening at http://localhost:${port}`))