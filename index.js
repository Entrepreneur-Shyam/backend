require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Shyam Sundar Patra')
})

app.get("/login",(req,res)=>{
    res.send('<h1> I am Shym </h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`app running in port ${process.env.PORT}`)
})