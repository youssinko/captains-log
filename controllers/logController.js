const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

//=============== Index =========
router.get('/', (req,res)=>{
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
router.get('/new',(req,res)=>{
   res.render('New')
})
//=============== DELETE ==============
router.delete('/logs/:id', (req,res)=>{
    Log.findByIdAndDelete(req.params.id , (err,data)=>{
        res.redirect('/logs')
    })
})
// ============== UPDATE =========
router.put('/:id' , (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(req.params.id , req.body ,( err, updatedLog)=>{
        if(!err){
            res.status(200).redirect(`/logs/${req.params.id}`)
        }else{
            res.status(400).send(err)
        }
    })
})
//============== CREATE ===========
 router.post('/',(req,res)=>{
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
 //============ EDIT =============
 router.get("/:id/edit" , (req,res)=>{
    Log.findById(req.params.id , (error , foundLog)=>{
if(!error){
    res.status(200).render('Edit', {log: foundLog})
}else{
    res.status(400).send({ msg: error.message })
}
    })
 })
//============ Show ==============
router.get('/:id' ,(req ,res)=>{
    Log.findById(req.params.id , (error , foundLog)=>{
        if(!error){
            res.status(200).render('Show',{log: foundLog})
        }else{
            res.status(400).send(error)
        }
    })
})

//========= export router ========
module.exports = router