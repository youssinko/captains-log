require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const methodOverRide = require("method-override")
const Captain = require('./models/logs')

//================== Connection to Database ===================
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open',()=>{
    console.log('Connected to Mongo')
})
//================== SetUp Engine =============================
app.set('view engine' , 'jsx')
app.engine('jsx', reactViews.createEngine())

//================== Middleware ===============================
app.use((req,res,next)=>{
    next()
})

app.use(express.urlencoded({extended:false}))
app.use(methodOverRide('_method'))

//=============== NEW =============
app.get('/captain/new',(req,res)=>{
   res.render('New')
})

//============== CREATE ===========
 app.post('/',(req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Captain.create(req.body, (error , createdShip)=>{
        if(!error){
            res.status(200).redirect('/captain')
        }else{
            res.status(400).send(error)
        }
    })
 })