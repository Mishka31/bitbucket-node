const { Schema, model } = require('mongoose')
const Joi = require('joi')

const superheroSchema = Schema(
  {
    nickname: {
      type: String,
      required: [false, 'Set name for superhero'],
    },
    real_name: {
      type: String,
      required: [false, 'Set real_name for superhero'],
    },
    origin_description: {
      type: String,
      required: [false, 'Set origin_description for superhero'],
    },
    superpowers: {
      type: String,
      required: [false, 'Set superpowers for superhero'],
    },
    catch_phrase: {
      type: String,
      required: [false, 'Set superpowers for superhero'],
    },
    imageUrl: {
      type: String,
      required: [false, 'Set superpowers for superhero'],
    },
  },
  { versionKey: false, timestamps: true }
)
const schema = Joi.object({
  nickname: Joi.string().min(1).max(30),
  real_name: Joi.string().min(1).max(30),
  origin_description: Joi.string().min(3),
  superpowers: Joi.string().min(1).max(100),
  catch_phrase: Joi.string().min(1).max(100),
  imageUrl: Joi.string(),
})

const Superhero = model('superheros', superheroSchema)

module.exports = {
  Superhero,
  schema,
}
