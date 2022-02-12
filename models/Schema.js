const mongoose = require ('mongoose')

const activitiesSchema = new mongoose.Schema ({
  description: {type: String, required:true},
  timeSpent: Number,
},{timestamps: true})

const rewardCollection = mongoose.model('Reward', activitiesSchema)

module.exports = rewardCollection
