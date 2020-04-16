let express = require('express')
let app =express()

app.get ('/',(req,res)=>{
    console.log('Hwllo world')
    res.send('Hello world')
    process .exit(1)
})
app.get ('/crash',(req,res)=>{
    console.log('Crash')
    res.send('Crash')
    process .exit(1)
})

app.listen(process.env.PORT,
    () => console.log('Sever is running at',process.env.PORT))