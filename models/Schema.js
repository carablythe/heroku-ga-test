const mongoose = require ('mongoose')

const activitiesSchema = new mongoose.Schema ({
  day:  {type: String, required:true},
  description: {dishes:{type: Boolean,required:true},
                vacuum:{type: Boolean,required:true},
                laundry:{type: Boolean, required:true},
                cook:{type: Boolean, required:true},
                tidy:{type: Boolean, required:true},
                plants:{type: Boolean, required:true}, other:{type: String, required:true}},
  timeSpent: {type: Number, required:true},
  points: {type: Number, required:true},
},{timestamps: true})

const rewardCollection = mongoose.model('Reward', activitiesSchema)

module.exports = rewardCollection
