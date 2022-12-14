require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const logController = require("./controllers/logController")
const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const methodOverRide = require('method-override')

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

// =========== Router ========
app.use("/logs", logController)

 //========== listening to port ==========
 app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  }) 

