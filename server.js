require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const methodOverRide = require("method-override")
const Log = require('./models/logs')

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

//=============== Index =========
app.get('/logs', (req,res)=>{
    Log.find({}, (error, allLogs)=>{
        if(!error){
            res.status(200).render('Index',{
                logs: allLogs
            })
        }else{
            res.status(400),send(error)
        }
    })
})

//=============== NEW =============
app.get('/logs/new',(req,res)=>{
   res.render('New')
})

//============== CREATE ===========
 app.post('/logs',(req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (error , createdlog)=>{
        if(!error){
            res.status(200).redirect('/logs')
        }else{
            res.status(400).send(error)
        }
    })
 })
//============ Show ==============
app.get('/:id' ,(req ,res)=>{
    Log.findById(req.params.id , (error , foundLog)=>{
        if(!error){
            res.status(200).render('Show',{log: foundLog})
        }else{
            res.status(400).send(error)
        }
    })
})

 //========== listening to port ==========
 app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  }) 