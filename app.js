const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./routes/Admin')
const shopRouter = require('./routes/Shop')
const path = require('path')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRouter)

app.use((req,res,next)=>{
res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)    