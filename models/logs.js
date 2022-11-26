const mongoose = require('mongoose')
const captainSchema = new mongoose.Schema(
    {
        title: {type: String , required: true},
        entry:{ type: String , required:true},
        shipIsBroken: {type: Boolean , required:true}
    },
    {
        timestamps: true
    }
)
const Captain = mongoose.model('captain', captainSchema)
module.exports = Captain