const mongoose = require ('mongoose')

const userSchema = mongoose.Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true, lowercase: true},
  username:  {type: String, required: true, unique: true,  lowercase: true },
  password: {type: String, required: true},
  roles: [{type: mongoose.Schema.Types.ObjectId,
            ref: "Role"}]
},{timestamps: true}, {collection: 'users'})

module.exports = mongoose.model('User', userSchema)
