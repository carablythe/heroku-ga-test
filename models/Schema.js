const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  id: {type:String, required: true, unique: true},
  name: {type: String, required:true},
  img: String,
  type: {type:[String], required:true},
  stats:
  {
    hp: String,
    attack: String,
    defense: String,
    spattack: String,
    spdefense: String,
    speed: String
  }
},{timestamps: true})

const Pokemon = mongoose.model('Pokemons', pokemonSchema)

module.exports = Pokemon
