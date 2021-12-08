const express = require( 'express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello Everyone')
})
app.get('/about',(req,res)=>{
    res.send('This is Hello')
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
