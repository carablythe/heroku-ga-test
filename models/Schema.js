const mongoose = require ('mongoose')

const activitiesSchema = new mongoose.Schema ({
  day:  {type: String, required:true},
  description: {type: String, required:true},
  timeSpent: {type: Number, required:true},
},{timestamps: true})

const rewardCollection = mongoose.model('Reward', activitiesSchema)

module.exports = rewardCollection
